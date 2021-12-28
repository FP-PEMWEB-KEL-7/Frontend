import React, { useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard'
import Navbar from '../components/Navbar'
import axios from '../axios'


const HomeScreen = ({ article }) => {
  const [allArticle, setAllArticle] = useState('');

  useEffect(() => {
    // const headers = {
    //   'Content-Type': 'text/plain'
    // };

    const getAllArticle = async () => {
      const response = await axios.get('/article/all');
      setAllArticle(response.data);
    }
    getAllArticle()
  }, [allArticle])

  // console.log(article);
  console.log(allArticle.data);
  return (
    <div className="home">
      <Navbar 
        loginScreen={false}
        isLogin={true}
      />
      <div className="container">
        {/* <p>{article.data}</p> */}
        {allArticle.data.map(item => (
          <BlogCard
            // description={item.content}
          description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quaerat quas, esse, odio ad libero corporis laudantium eveniet nemo nihil, molestiae voluptatum eum vero? Deserunt quasi odit quis magni voluptate.'
          />
        ))}
        {/* <BlogCard 
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
        /> */}
      </div>
    </div>
  )
}

export default HomeScreen
