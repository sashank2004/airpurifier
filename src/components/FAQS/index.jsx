import React, { useState } from 'react'
import './faq.css'

const FAQS = () => {
  const [faq1,setfaq1]=useState(false);
  const [faq2,setfaq2]=useState(false);
  const [faq3,setfaq3]=useState(false);
  const [faq4,setfaq4]=useState(false);
  return (
    <div className='faqs'>
      <h1>FAQS for Air Purifier</h1>   
        <div className='collection'>
        <div className='faq'>
          <div onClick={()=>{
            setfaq1(!faq1)
          }} className='ques'
          style={{
            color:faq1?"rgb(255,0,0)":"black"
          }}>
          <span>1. Why can indoor air pollution be much worse than outdoor air pollution?</span>
          </div>
          <div
          className={faq1?"answer":"none"}
          style={{
            display:faq1?"flex":"none"
          }}>
            <span>India is amongst the most highly polluted regions in the world. As per a recent WHO report, 13 of the top 20 polluted cities in the world are in India. Add to this fact, the indoor air pollution is much worse than outdoor air pollution.</span>
          </div>
          
        </div>
        <div className='faq'>
          <div onClick={()=>{
            setfaq2(!faq2)
          }} className='ques'
          style={{
            color:faq2?"rgb(255,0,0)":"black"
          }}>
          <span>2. Can I control My Air Purifier from my Smartphone?</span>
          </div>
          <div
          className={faq2?"answer":"none"}
          style={{
            display:faq2?"flex":"none"
          }}>
            <span>Some of our Air Purifiers which have Wi-fi function can be connected with Wi-fi and controlled through the H Plus APP on a smartphone.</span>
          </div>
          
        </div>
        <div className='faq'>
          <div onClick={()=>{
            setfaq3(!faq3)
          }} className='ques'
          style={{
            color:faq3?"rgb(255,0,0)":"black"
          }}>
          <span>3. How often I need to replace filters in Air Purifier?</span>
          </div>
          <div
          className={faq3?"answer":"none"}
          style={{
            display:faq3?"flex":"none"
          }}>
            <span>The life of HEPA and Activated carbon/ HiSiv filter in indoor air purifiers is up to 3000 hours. For car air purifier it is 360 hours. Depending upon ambient air quality and extent of usage, the filter will need a replacement whenever the filter replacement indicator on the device goes live.</span>
          </div>
          
        </div>
        <div className='faq'>
          <div onClick={()=>{
            setfaq4(!faq4)
          }} className='ques'
          style={{
            color:faq4?"rgb(255,0,0)":"black"
          }}>
          <span>4. How do I check the best air purifier for my needs?</span>
          </div>
          <div
          className={faq4?"answer":"none"}
          style={{
            display:faq4?"flex":"none"
          }}>
            <span>We offer a wide range of products to suit different room sizes. Additionally depending upon the model, few features such as PM2.5 display, type of filter, wi-fi connectivity, smart-eye technology vary across the range. Products can be compared on the website and in case more information is required, one can get in touch with our representative to choose the right air purifier.</span>
          </div>
          
        </div>
        </div>
    </div>
  )
}

export default FAQS;