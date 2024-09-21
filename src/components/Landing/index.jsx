import React from 'react';
import './style.css';
import Image from '../Image';
import Technology from '../Technology';
import Products from '../Products';

const Landing = () => {
  return (
    <div className="landing">
      <Image/>
      <Technology/>
      <Products/>
    </div>
  );
};

export default Landing;
