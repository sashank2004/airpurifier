import React from 'react';
import './style.css';
import Image from '../Image';
import Technology from '../Technology';
import Products from '../Products';
import Testimonial from '../Testimonial';

const Landing = () => {
  return (
    <div className="landing">
      <Image/>
      <Technology/>
      <Products/>
      <Testimonial/>
    </div>
  );
};

export default Landing;
