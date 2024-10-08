import React, { useState } from 'react'
import './residential.css'
import ProductItem from './ProductItem.jsx';
import { RESIDENTIAL_DATA } from '../../residentialdata.js';

const Residential = () => {
  const [products,setProducts]=useState(RESIDENTIAL_DATA);
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

export default Residential;