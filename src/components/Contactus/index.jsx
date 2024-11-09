import React, { useState, useRef } from 'react';
import './contactus.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false); // State for handling submission status
  const [popupMessage, setPopupMessage] = useState(''); // State for popup message
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable button while submitting
    setShowPopup(false); // Hide any previous popup

    emailjs
      .sendForm('service_283x039', 'template_ae6t7z5', form.current, {
        publicKey: 'fqyKaZp2LmEh31asD',
      })
      .then(
        () => {
          setIsSubmitting(false); // Enable button after success
          setPopupMessage('Email sent successfully!'); // Set success message
          setShowPopup(true); // Show popup
          e.target.reset(); // Reset form
          hidePopup(); // Hide popup after some time
        },
        (error) => {
          setIsSubmitting(false); // Enable button after error
          setPopupMessage('Failed to send email. Please try again later.'); // Set error message
          setShowPopup(true); // Show popup
          console.log('FAILED...', error.text);
          hidePopup(); // Hide popup after some time
        }
      );
  };

  const hidePopup = () => {
    setTimeout(() => {
      setShowPopup(false); // Hide popup after 3 seconds
    }, 3000);
  };

  return (
    <section id='contactPage'>
      <div id="contact">
        <h1 className='contactPageTitle'>Contact Us</h1>
        <span className='contactDesc'>Please fill out the form below to discuss how we can Help.</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type="text" className='name' placeholder='Your Name' name='your_name' required />
          <input type="email" className='email' placeholder='Your Email' name='your_email' required />
          <input type="tel" className='number' placeholder='Your Phone Number' name='your_number' required />
          <textarea className='msg' name="message" rows="5" placeholder='Your Message' required></textarea>

          {/* Submit button becomes disabled while submitting */}
          <button type="submit" className='submitBtn' disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </form>

        {/* Popup that appears when the message is sent or fails */}
        {showPopup && (
          <div className={`popup ${popupMessage.includes('Failed') ? 'error' : 'success'}`}>
            <p>{popupMessage}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
