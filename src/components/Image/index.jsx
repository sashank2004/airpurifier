import React from 'react'
import './image.css'
import purifier from '../../assets/purifier.jpg';

const Image = () => {
  return (
    <div className='top'>
      <div className="content">
        <h1 className="title">Breathe Cleaner, Live Better
        </h1>
        <p className="subtitle">Pure air. Honest pricing. Remarkable performance.</p>
        <div className="buttons">
          <button onClick={()=>{
            window.location="./products"
          }} className="shop-btn">Explore Now</button>
          <button onClick={()=>{
            window.location="./aboutus"
          }} className="learn-btn">Know More</button>
        </div>
      </div>
      <div className="img">
        <img className="image" src={purifier} alt="Purifier" />
      </div>
    </div>
  )
}

export default Image;