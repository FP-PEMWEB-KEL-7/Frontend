import React from 'react'
import BlogCard from '../components/BlogCard'
import Navbar from '../components/Navbar'

const HomeScreen = ({ article }) => {
  console.log(article);
  return (
    <div className="home">
      <Navbar 
        loginScreen={false}
        isLogin={true}
      />
      <div className="container">
        <BlogCard 
          description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quaerat quas, esse, odio ad libero corporis laudantium eveniet nemo nihil, molestiae voluptatum eum vero? Deserunt quasi odit quis magni voluptate.'
        />
        <BlogCard 
          description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quaerat quas, esse, odio ad libero corporis laudantium eveniet nemo nihil, molestiae voluptatum eum vero? Deserunt quasi odit quis magni voluptate.'
        />
        <BlogCard 
          description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quaerat quas, esse, odio ad libero corporis laudantium eveniet nemo nihil, molestiae voluptatum eum vero? Deserunt quasi odit quis magni voluptate.'
        />
        <BlogCard 
          description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quaerat quas, esse, odio ad libero corporis laudantium eveniet nemo nihil, molestiae voluptatum eum vero? Deserunt quasi odit quis magni voluptate.'
        />
        <BlogCard 
          description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quaerat quas, esse, odio ad libero corporis laudantium eveniet nemo nihil, molestiae voluptatum eum vero? Deserunt quasi odit quis magni voluptate.'
        />
        <BlogCard 
          description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quaerat quas, esse, odio ad libero corporis laudantium eveniet nemo nihil, molestiae voluptatum eum vero? Deserunt quasi odit quis magni voluptate.'
        />
        <BlogCard 
          description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quaerat quas, esse, odio ad libero corporis laudantium eveniet nemo nihil, molestiae voluptatum eum vero? Deserunt quasi odit quis magni voluptate.'
        />
        <BlogCard 
          description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quaerat quas, esse, odio ad libero corporis laudantium eveniet nemo nihil, molestiae voluptatum eum vero? Deserunt quasi odit quis magni voluptate.'
        />
        <BlogCard 
          description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quaerat quas, esse, odio ad libero corporis laudantium eveniet nemo nihil, molestiae voluptatum eum vero? Deserunt quasi odit quis magni voluptate.'
        />
        <BlogCard 
          description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quaerat quas, esse, odio ad libero corporis laudantium eveniet nemo nihil, molestiae voluptatum eum vero? Deserunt quasi odit quis magni voluptate.'
        />
      </div>
    </div>
  )
}

export default HomeScreen
