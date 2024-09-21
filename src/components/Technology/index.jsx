import React from 'react'
import './style.css'
import purifier from '../../assets/air.avif';
import efficiency from '../../assets/efficiency.jpeg'
import Purification from '../../assets/purification.png'
import certified from '../../assets/certified.png'

const Technology = () => {
  return (
    <div className='technology'>
      <h1>Cutting-Edge Technology</h1>
      <div className='wrapper'>
        <div className='item'>
          <img src={purifier} alt="Goodness of copper"/>
          <span className='s-head'>Pure Air, Perfected
          </span>
          <p>Enhances every breath with 99.9% pure air</p>
        </div>
        <div className='item'>
        <img src={efficiency} alt="Goodness of copper"/>
          <span className='s-head'>High Efficiency Air Filtration
          </span>
          <p>Saves up to 80% more energy compared to standard models</p>
        </div>
        <div className='item'>
        <img src={Purification} alt="Goodness of copper"/>
          <span className='s-head'>Advanced Purification System
</span>
          <p>Ensures 100% safe and pollutant-free air by removing harmful particles, allergens, and odors.</p>
        </div>
        <div className='item'>
        <img src={certified} alt="Goodness of copper"/>
          <span className='s-head'>Compliance Certified
          </span>
          <p>Meets rigorous air quality standards</p>
        </div>
      </div>
    </div>
  )
}

export default Technology;