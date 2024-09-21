import React from 'react';
import './style.css';
import Industrial from '../Industrial';
import Residential from '../Residential';

const Products = () => {
  return (
    <div className='products'>
      <h1 className='products-categories'>Products Categories</h1>
      <h2>Industrial Air Purifiers</h2>
      <Industrial/>
      <h2>Residential & Commercial Air Purifiers</h2>
      <Residential/>
    </div>
  )
}

export default Products;