import React,{useState} from 'react'
import './aboutus.css'
import { Link } from 'react-scroll';

const Aboutus = () => {
  const [activeSite, setActiveSite] = useState('introduction');
  return (
    <div>
      <div className='heading'>
        <span className='heading-aboutus'>About Us</span>
      </div>
      <div className='aboutus-scroll'>
      <Link onClick={()=>{
        setActiveSite('introduction');
      }}activeClass="active" to="introduction" spy={true} smooth={true} offset={-100} duration={500}>
      <div className={`aboutus-scroll-box ${activeSite === 'introduction' ? 'actives' : ''}`}><span className={`aboutus-scroll-content ${activeSite === 'introduction' ? 'actived' : ''}`}>Introduction</span></div>
      </Link>
      <Link onClick={()=>{
        setActiveSite('whychooseus');
      }} activeClass="active" to="whychooseus" spy={true} smooth={true} offset={-100} duration={500}>
      <div className={`aboutus-scroll-box ${activeSite === 'whychooseus' ? 'actives' : ''}`}><span className={`aboutus-scroll-content ${activeSite === 'whychooseus' ? 'actived' : ''}`}>Why Choose Us?</span></div>
      </Link>
      <Link onClick={()=>{
        setActiveSite('ourmission');
      }} activeClass="active" to="ourmission" spy={true} smooth={true} offset={-100} duration={500}>
      <div className={`aboutus-scroll-box ${activeSite === 'ourmission' ? 'actives' : ''}`}><span className={`aboutus-scroll-content ${activeSite === 'ourmission' ? 'actived' : ''}`}>Our Mission</span></div>
      </Link>
      <Link onClick={()=>{
        setActiveSite('ourvision');
      }}activeClass="active" to="ourvision" spy={true} smooth={true} offset={-100} duration={500}>
      <div className={`aboutus-scroll-box ${activeSite === 'ourvision' ? 'actives' : ''}`}><span className={`aboutus-scroll-content ${activeSite === 'ourvision' ? 'actived' : ''}`}>Our Vision</span></div>
      </Link>
      <Link onClick={()=>{
        setActiveSite('contactus');
      }} activeClass="active" to="contactus" spy={true} smooth={true} offset={-100} duration={500}>
      <div className={`aboutus-scroll-box ${activeSite === 'contactus' ? 'actives' : ''}`}><span className={`aboutus-scroll-content ${activeSite === 'contactus' ? 'actived' : ''}`}>Contact Us</span></div>
      </Link>
      </div>

   <div className='aboutus-main-content'>
   <div className='introduction'>
        <h2 className='h2'>Introduction</h2>
        <p className='para'><span className='welcome'>Welcome to <b>[Air Purifier Brand]</b></span>, your trusted partner for clean and healthy living. We offer advanced air purification systems designed to remove harmful pollutants and allergens, ensuring fresh, breathable air for your home or office. Our sleek, energy-efficient units are easy to operate and come with the latest in air filtration technology. Whether you're looking to improve indoor air quality or reduce airborne contaminants, PureAir Solutions is dedicated to helping you create a safer, cleaner environment.</p>

      </div>
      <div className='whychooseus'>
        <h2 className='h2'>Why Choose Us?</h2>
        <p className='para'>
    At <b>[Air purifier brand]</b>, we are committed to improving your indoor air quality with state-of-the-art air purification technology. Our solutions are designed to be efficient, user-friendly, and effective in creating a healthier living environment.
    <ul style={{margin:"20px 30px"}}>
        <li>Advanced Filtration Systems</li>
        <li>Energy-Efficient Designs</li>
        <li>Compact and Sleek Units</li>
        <li>Easy Installation and Maintenance</li>
    </ul>
</p>

      </div>
      <div className='ourmission'>
        <h2 className='h2'>Our Mission</h2>
        <p className='para'>
        Our mission at <b>[Air Purifier Brand]</b> is to provide homes and businesses with the cleanest and healthiest air possible. We aim to simplify the process of air purification by offering high-performance, energy-efficient purifiers that promote healthier environments.
        <br/>
        <br/>

We understand that maintaining air quality can be challenging, especially in today's world. That’s why we focus on making it easier for everyone to enjoy cleaner air without any hassle. Our air purifiers are designed with advanced filtration technology, ensuring your spaces remain free from harmful particles and pollutants.<br/><br/>

At <b>[Air Purifier Brand]</b>, we believe every space deserves access to pure air, regardless of size or location. We are committed to helping individuals and businesses breathe easier, supporting their health and well-being. Ultimately, our mission is to improve air quality, foster healthier environments, and contribute to a better quality of life for all.
</p>

      </div>

      <div className='ourvision'>
        <h2 className='h2'>Our Vision</h2>
        <p className='para'>
        At <b>[Air Purifier Brand]</b>, our vision is to redefine how people experience air quality in their homes and workplaces. We imagine a future where everyone has access to clean, fresh air, no matter where they live or work, and where our innovative air purification solutions play a vital role in promoting healthier living environments.<br/><br/>

We strive to create a world where air quality is no longer a concern, and where advanced filtration technologies make pure air accessible to all. Our vision is to foster a healthier, more sustainable future by providing effective, energy-efficient air purifiers that enhance well-being and improve the quality of life in every space.
        </p>

      </div>

      <div className='contactus'>
        <h2 className='h2'>Contact Us</h2>
        <p className='para'>
        For any questions or requests, don’t hesitate to reach out to us. Our team is here to assist you with any inquiries or support you may need.
        <br/>
        <span className='contactusclick' onClick={
          ()=>{
            window.location="./contactus"
          }
        }>Click Here</span>
        </p>
      </div>      

   </div>     
    </div>
  )
}

export default Aboutus;