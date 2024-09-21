import React from 'react'
import { Link } from 'react-router-dom';
import arrow from '../../assets/arrow_outward.png';
import './style.css'

const ProductItem = ({productID,category,title,description,thumbnail}) => {
  const shortDescription =description.length > 145 ? description.substr(0,145)+'...' : description;
  const postTitle =title.length > 50 ? title.substr(0,50)+'...' : title;
  return (
    <article onClick={()=>{
      window.location=`/residential/${productID}`;
    }} className='post'>
      <div className='post__thumbnail'>
         <img className='img1' src={thumbnail} alt={title}/>
      </div>
      <div className='post__content'>
        <Link to={`/residential/${productID}`}>
          <h3>{postTitle}</h3>
        </Link>
        <p>{shortDescription}</p>
        <div className='post__footer'>
          <Link className='btn category'>View More <img className="arrow" src={arrow} alt="arrow_outward"/></Link>
        </div>
      </div>
    </article>
  )
}

export default ProductItem;