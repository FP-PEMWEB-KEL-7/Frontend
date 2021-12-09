import { UserIcon } from '@heroicons/react/solid'
import React from 'react'
import BlogCard from '../components/BlogCard'
import Navbar from '../components/Navbar'

const ProfileScreen = () => {
  return (
    <div className="profile">
      <Navbar 
        loginScreen={false}
      />
      <div className="container">
        <div className="leftSide">
          <UserIcon className='profileImage' />
          <p className="name">Michael Jeffry Setiawan</p>
          <p className="totalArticle">12 Articles Written</p>
        </div>
        <div className="rightSide">
        <BlogCard 
            description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quaerat quas, esse, odio ad libero corporis laudantium eveniet nemo nihil, molestiae voluptatum eum vero? Deserunt quasi odit quis magni voluptate.'
            profileScreen={true}
          />
          <BlogCard 
            description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quaerat quas, esse, odio ad libero corporis laudantium eveniet nemo nihil, molestiae voluptatum eum vero? Deserunt quasi odit quis magni voluptate.'
            profileScreen={true}
          />
          <BlogCard 
            description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quaerat quas, esse, odio ad libero corporis laudantium eveniet nemo nihil, molestiae voluptatum eum vero? Deserunt quasi odit quis magni voluptate.'
            profileScreen={true}
          />
          <BlogCard 
            description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quaerat quas, esse, odio ad libero corporis laudantium eveniet nemo nihil, molestiae voluptatum eum vero? Deserunt quasi odit quis magni voluptate.'
            profileScreen={true}
          />
          <BlogCard 
            description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quaerat quas, esse, odio ad libero corporis laudantium eveniet nemo nihil, molestiae voluptatum eum vero? Deserunt quasi odit quis magni voluptate.'
            profileScreen={true}
          />
          <BlogCard 
            description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quaerat quas, esse, odio ad libero corporis laudantium eveniet nemo nihil, molestiae voluptatum eum vero? Deserunt quasi odit quis magni voluptate.'
            profileScreen={true}
          />
          <BlogCard 
            description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quaerat quas, esse, odio ad libero corporis laudantium eveniet nemo nihil, molestiae voluptatum eum vero? Deserunt quasi odit quis magni voluptate.'
            profileScreen={true}
          />
          <BlogCard 
            description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quaerat quas, esse, odio ad libero corporis laudantium eveniet nemo nihil, molestiae voluptatum eum vero? Deserunt quasi odit quis magni voluptate.'
            profileScreen={true}
          />
          <BlogCard 
            description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quaerat quas, esse, odio ad libero corporis laudantium eveniet nemo nihil, molestiae voluptatum eum vero? Deserunt quasi odit quis magni voluptate.'
            profileScreen={true}
          />
          <BlogCard 
            description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quaerat quas, esse, odio ad libero corporis laudantium eveniet nemo nihil, molestiae voluptatum eum vero? Deserunt quasi odit quis magni voluptate.'
            profileScreen={true}
          />
          <BlogCard 
            description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quaerat quas, esse, odio ad libero corporis laudantium eveniet nemo nihil, molestiae voluptatum eum vero? Deserunt quasi odit quis magni voluptate.'
            profileScreen={true}
          />
          <BlogCard 
            description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quaerat quas, esse, odio ad libero corporis laudantium eveniet nemo nihil, molestiae voluptatum eum vero? Deserunt quasi odit quis magni voluptate.'
            profileScreen={true}
          />
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
