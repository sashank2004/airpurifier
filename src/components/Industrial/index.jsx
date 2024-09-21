import React, { useState } from 'react'
import './style.css'
import ProductItem from './ProductItem.jsx';
import { INDUSTRIAL_DATA } from '../../industrialdata.js';
import './style.css';

const Industrial = () => {
  const [products,setProducts]=useState(INDUSTRIAL_DATA);
  return (
    <section className='products'>
     {products.length>0 ?<div className='container products__container'>
     {
       products.map(({id,thumbnail,category,title,desc})=>
       <ProductItem key={id} productID={id} thumbnail={thumbnail} category={category} title={title} description={desc}/>)
     }
     </div>:<h2 className='center'>No Products found</h2>}
    </section>
  )
}

export default Industrial;