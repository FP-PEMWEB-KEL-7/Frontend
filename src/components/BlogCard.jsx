import React from 'react'
import '../styles/styles.css'
import { Link } from "react-router-dom";


const BlogCard = ({ description, profileScreen }) => {

  return (
    <div className="blogCard">
      <div className="left">
        <div className="top">
          <Link to="/profile" className='author'>
            <p className="author">micjef</p>
          </Link>
          <p className="time">9 December 2021</p>
        </div>
        <div className="main">
          <Link to="/read" className='title'>
            <p className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Link>
          <p className="description">
            {(description.length > 130) ? ((description.substring(0,130)) + '...') : description}
          </p>
          <p className="readTime">8 mins read</p>
          {
            profileScreen === true && 
            <div className="action">
              <a href=" " className="updateAction">Edit</a>
              <a href=" " className="deleteAction">Delete</a>
            </div>
          }
        </div>
      </div>
      <div className="right">
        <div className="image">
          <img src="https://miro.medium.com/fit/c/250/168/0*b6tqs9K4yPmIkM3D" alt="testing" className='image' />
        </div>
      </div>
    </div>
  )
}

export default BlogCard
