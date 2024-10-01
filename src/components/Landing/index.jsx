import React from 'react';
import './style.css';
import Image from '../Image';
import Technology from '../Technology';
import Products from '../Products';
import Testimonial from '../Testimonial';
import FAQS from '../FAQS';

const Landing = () => {
  return (
    <div className="landing">
      <Image/>
      <Technology/>
      <Products/>
      <Testimonial/>
      <FAQS/>
    </div>
  );
};

export default Landing;
