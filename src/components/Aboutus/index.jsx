import React, { useState } from 'react';
import './aboutus.css';
import { Link } from 'react-scroll';

const Aboutus = () => {
  const [activeSite, setActiveSite] = useState('introduction');

  return (
    <div className='aboutus-container'>
      <div className='heading'>
        <span className='heading-aboutus'>About Us</span>
      </div>

      <div className='aboutus-scroll'>
        <Link onClick={() => setActiveSite('introduction')} activeClass="active" to="introduction" spy={true} smooth={true} offset={-100} duration={500}>
          <div className={`aboutus-scroll-box ${activeSite === 'introduction' ? 'actives' : ''}`}>
            <span className={`aboutus-scroll-content ${activeSite === 'introduction' ? 'actived' : ''}`}>Introduction</span>
          </div>
        </Link>
        <Link onClick={() => setActiveSite('whychooseus')} activeClass="active" to="whychooseus" spy={true} smooth={true} offset={-100} duration={500}>
          <div className={`aboutus-scroll-box ${activeSite === 'whychooseus' ? 'actives' : ''}`}>
            <span className={`aboutus-scroll-content ${activeSite === 'whychooseus' ? 'actived' : ''}`}>Why Choose Us?</span>
          </div>
        </Link>
        <Link onClick={() => setActiveSite('ourmission')} activeClass="active" to="ourmission" spy={true} smooth={true} offset={-100} duration={500}>
          <div className={`aboutus-scroll-box ${activeSite === 'ourmission' ? 'actives' : ''}`}>
            <span className={`aboutus-scroll-content ${activeSite === 'ourmission' ? 'actived' : ''}`}>Our Mission</span>
          </div>
        </Link>
        <Link onClick={() => setActiveSite('ourvision')} activeClass="active" to="ourvision" spy={true} smooth={true} offset={-100} duration={500}>
          <div className={`aboutus-scroll-box ${activeSite === 'ourvision' ? 'actives' : ''}`}>
            <span className={`aboutus-scroll-content ${activeSite === 'ourvision' ? 'actived' : ''}`}>Our Vision</span>
          </div>
        </Link>
        <Link onClick={() => setActiveSite('contactus')} activeClass="active" to="contactus" spy={true} smooth={true} offset={-100} duration={500}>
          <div className={`aboutus-scroll-box ${activeSite === 'contactus' ? 'actives' : ''}`}>
            <span className={`aboutus-scroll-content ${activeSite === 'contactus' ? 'actived' : ''}`}>Contact Us</span>
          </div>
        </Link>
      </div>

      <div className='aboutus-main-content'>
        <div className='introduction'>
          <h2 className='h2'>Introduction</h2>
          <p className='para'>
            <span className='welcome'>Welcome to <b>Aabhar Envocare</b></span>A pioneering force in environmental sustainability and air purification solutions. As global awareness of environmental challenges increases, we stand at the forefront, providing innovative air purifiers that transform your indoor spaces into sanctuaries of clean, healthy air.
            <br /><br />
            With a firm commitment to excellence, Aabhar Envocare offers solutions that not only remove pollutants but also ensure the long-term well-being of your home or workplace. Our systems are designed to blend seamlessly into modern living environments, offering advanced filtration technology with unmatched energy efficiency and ease of use.
            <br /><br />
            Whether you are battling allergies, pollution, or simply want to breathe fresher air, Aabhar Envocare is your partner in promoting cleaner and greener living.
          </p>
        </div>

        <div className='whychooseus'>
          <h2 className='h2'>Why Choose Us?</h2>
          <p className='para'>
            At <b>Aabhar Envocare</b>, our dedication to improving air quality goes beyond mere technology. We believe in creating a healthier planet through sustainable innovations, combining performance with eco-conscious design. Choosing Aabhar Envocare means choosing a partner that values your health and the environment in equal measure.
            <br /><br />
            <ul style={{ margin: "20px 30px" }}>
              <li><b>Advanced Multi-Stage Filtration:</b> Our air purifiers are equipped with HEPA filters, activated carbon filters, and UV-C light technology to effectively neutralize airborne pathogens, dust, and harmful particles.</li>
              <li><b>Environmentally Friendly:</b> We prioritize energy-efficient solutions, reducing your carbon footprint while maintaining high air purification standards.</li>
              <li><b>Innovative Designs:</b> Each of our air purifiers is thoughtfully designed to complement contemporary interiors while delivering maximum performance in even the most polluted environments.</li>
              <li><b>Easy Maintenance:</b> We offer intuitive, user-friendly systems that require minimal upkeep, ensuring that you can focus on what matters most—enjoying fresh, clean air.</li>
              <li><b>Commitment to Sustainability:</b> We are dedicated to using recyclable materials and reducing waste in all of our production processes, furthering our commitment to a greener future.</li>
            </ul>
            With Aabhar Envocare, you invest not just in air purification but in a healthier, more sustainable future for yourself and generations to come.
          </p>
        </div>

        <div className='ourmission'>
          <h2 className='h2'>Our Mission</h2>
          <p className='para'>
            At <b>Aabhar Envocare</b>, our mission is to lead the charge in transforming indoor environments into healthier, more sustainable spaces. We aim to empower individuals, families, and businesses to take control of their air quality through advanced yet accessible technology.
            <br /><br />
            By delivering solutions that meet the highest standards of safety, energy efficiency, and performance, we strive to make clean air a universal right, not a privilege. Our purifiers are meticulously engineered to eliminate pollutants, allergens, and harmful chemicals, fostering an environment where well-being and sustainability thrive together.
            <br /><br />
            Ultimately, we seek to raise global standards of air quality, ensuring that everyone, everywhere, can breathe cleaner, safer air.
          </p>
        </div>

        <div className='ourvision'>
          <h2 className='h2'>Our Vision</h2>
          <p className='para'>
            The vision of <b>Aabhar Envocare</b> is a world where clean air is an integral part of every space, fostering health and well-being. We aspire to be a global leader in air purification, setting benchmarks for innovation, sustainability, and customer satisfaction.
            <br /><br />
            Our forward-thinking approach is driven by the belief that air quality should never be compromised. As we continue to evolve, we aim to create products that not only meet the demands of today but anticipate the needs of tomorrow. Our vision extends to making air purification accessible to all, contributing to a future where everyone can enjoy the benefits of clean, breathable air, irrespective of their location.
            <br /><br />
            We envision a healthier planet, powered by sustainable technology, where Aabhar Envocare plays a pivotal role in shaping the future of environmental care.
          </p>
        </div>

        <div className='contactus'>
          <h2 className='h2'>Contact Us</h2>
          <p className='para'>
            We're here to help! Whether you have questions about our air purifiers or need assistance with selecting the right product for your space, the <b>Aabhar Envocare</b> team is just a call or click away.
            <br /><br />
            Our customer service representatives are dedicated to providing you with the best possible experience, from product inquiries to post-purchase support. 
            <br /><br />
            <span className='contactusclick' onClick={() => window.location = './contactus'}>Click Here</span> to get in touch with us today and take the first step toward cleaner air!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
