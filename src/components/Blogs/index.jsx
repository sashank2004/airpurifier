import React, { useState } from 'react'
import PostItem from './PostItem.jsx';
import { DUMMY_POSTS } from '../../data.js';
import './blogs.css';


const Blogs = () => {
   const [posts,setPosts]=useState(DUMMY_POSTS)
  return (
    <section className='posts'>
     {posts.length>0 ?<div className='container posts__container'>
     {
       posts.map(({id,thumbnail,category,title,desc,authorID})=>
       <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} description={desc} authorID={authorID}/>)
     }
     </div>:<h2 className='center'>No Posts found</h2>}
    </section>
  )
}

export default Blogs