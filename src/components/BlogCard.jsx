import React from 'react'
import '../styles/styles.css'

const BlogCard = ({ description }) => {

  return (
    <div className="blogCard">
      <div className="left">
        <div className="top">
          <p className="author">Michael Jeffry Setiawan</p>
          <p className="time">9 December 2021</p>
        </div>
        <div className="main">
          <p className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p className="description">
            {(description.length > 130) ? ((description.substring(0,130)) + '...') : description}
          </p>
          <p className="readTime">8 mins read</p>
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
