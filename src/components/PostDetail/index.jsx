import React from 'react'
import { useParams } from 'react-router-dom'
import { DUMMY_POSTS } from '../../data' // Importing DUMMY_POSTS from data.js
import './post.css'

const PostDetail = () => {
  const { id } = useParams(); // Getting the ID from the URL
  const post = DUMMY_POSTS.find(post => post.id === id); // Finding the post by ID

  // If post is not found, show a message
  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <section className='post-detail'>
      <div className='container post-detail__container'>
        <h1>{post.title}</h1>
        <div className='post-detail__thumbnail'>
          <img className='imge' src={post.thumbnail} alt={post.title} />
        </div>
        <p>{post.desc}</p>

        {/* Rendering the content */}
        <div dangerouslySetInnerHTML={{ __html: post.content }} />

      </div>
    </section>
  );
}

export default PostDetail;
