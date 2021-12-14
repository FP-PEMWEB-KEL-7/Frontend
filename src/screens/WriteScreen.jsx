import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const WriteScreen = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

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
          <Link to='/' className="text">
            <p className="text">Save Article</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WriteScreen;
