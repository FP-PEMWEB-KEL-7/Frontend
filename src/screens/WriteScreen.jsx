import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { saveWrite } from '../store/writeSlice'

const WriteScreen = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const saveArticle = async (e) => {
    e.preventDefault();
    const newArticle = {
      title: title,
      content: content,
      date: Date.now(),
    }

    if(title){
      console.log(newArticle);
      let hasSymbol = newArticle.content.substring(0, newArticle.content.length).match(/\n/);

      console.log(hasSymbol);

      dispatch(
        saveWrite(newArticle)
      )
    }
  }

  return (
    <div className="write">
      <Navbar loginScreen={false} />
      <div className="container">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="title"
          placeholder="Type your title here"
          autoComplete="off"
        />
        <textarea
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="content"
          placeholder="Type your content here"
          autoComplete="off"
        ></textarea>
        <div className="button">
          <Link to='/' className="text" onClick={saveArticle}>
            <p className="text">Save Article</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WriteScreen;
