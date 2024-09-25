import React from 'react'
import { useParams } from 'react-router-dom'
import { INDUSTRIAL_DATA } from '../../industrialdata'
import './inddetail.css'
import advanced from '../../assets/advanced.png'
import adaptable from '../../assets/adaptable.png'
import maintanence from '../../assets/maintanence.jpeg'
import energy from '../../assets/energy.png'

const IndustrialDetail = () => {
  const { id } = useParams(); // Getting the ID from the URL
  const post = INDUSTRIAL_DATA.find(post => post.id === id); // Finding the post by ID

  // If post is not found, show a message
  if (!post) {
    return <h2>Product not found</h2>;
  }

  return (
    <section className='post-detail'>
      <div className='container post-detail__container'>
        <h1>{post.title}</h1>
        <div className='post-detail__thumbnail'>
          <img className='imges' src={post.thumbnail} alt={post.title} />
        </div>
        <div className='product-main'>
          <div className='about-product'>
            <h2>About Product</h2>
            <p>{post.desc}</p>
          </div>
          <div className='features'>
            <h2>Key Features</h2>
            <span className='middle'><img className="small" src={advanced} alt="advanced"/> Advanced Technology for Industrial Efficiency</span>
            <span className='middle'><img className="small" src={adaptable} alt="adaptable"/> Portable and Adaptable</span>
            <span className='middle'><img className="small" src={maintanence} alt="maintanence"/> Low Maintenance, High Performance</span>
            <span className='middle'><img className="small" src={energy} alt="energy"/> Energy-Efficient Operation</span>
          </div>
        </div>
        


        <h2>Specifications</h2>
        {/* Rendering the content */}
        <div dangerouslySetInnerHTML={{ __html: post.content }} />

      </div>
    </section>
  );
}

export default IndustrialDetail;
