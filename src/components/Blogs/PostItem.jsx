import React from 'react'
import { Link } from 'react-router-dom';
import './blogs.css'

const PostItem = ({postID,category,title,description,authorID,thumbnail}) => {
  const shortDescription =description.length > 145 ? description.substr(0,145)+'...' : description;
  const postTitle =title.length > 30 ? title.substr(0,30)+'...' : title;
  return (
    <article onClick={()=>{
      window.location=`/posts/${postID}`;
    }} className='post'>
      <div className='post__thumbnail'>
         <img className='img1' src={thumbnail} alt={title}/>
      </div>
      <div className='post__content'>
        <Link to={`/posts/${postID}`}>
          <h3>{postTitle}</h3>
        </Link>
        <p>{shortDescription}</p>
        <div className='post__footer'>
          <Link className='btn category'>{category}</Link>
        </div>
      </div>
    </article>
  )
}

export default PostItem;