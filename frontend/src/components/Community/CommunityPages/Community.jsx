import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Css/Page.css";

const Community = () => {
  const navigate = useNavigate()
  const [selectedTab, setSelectedTab] = useState("all");
  const [posts, setPosts] = useState([
    { id: 1, title: "Reactjs ", votes: "Make Better UI with many libraries ,UI with many libraries , " },
    { id: 2, title: "Node", votes: "Best practices for Node.js development" },
    { id: 3, title: "Database", votes: "MongoDB vs. MySQL: Which is better?" },
    {
      id: 4,
      title: "Python",
      votes:
        " A versatile language for everything from data analysis to web development",
    },
    {
      id: 4,
      title: "Java",
      votes: "A robust language for web development and scripting",
    },
    {
      id: 1,
      title: "Ruby",
      votes: " A popular language used  for web development and scripting",
    },
    {
      id: 2,
      title: "C++",
      votes: "A pwerful language used for systems programming, gaming and more",
    },
    {
      id: 3,
      title: "Php",
      votes:
        "A server side language used for web development and powering popular content management systems like wordpress",
    },
    {
      id: 4,
      title: "Swift",
      votes: "Apple modern language for ios, macos, and beyond",
    },
    {
      id: 4,
      title: "Kotlin",
      votes: "A modern language used for android development and beyond",
    },
    {
      id: 1,
      title: "Typescript",
      votes:
        "A typed superset  of javascript that adds additional features and helps catch errors at compile time",
    },
    {
      id: 2,
      title: "Rust",
      votes:
        "A language focused on safety , speed and concurrency used for systems programming and beyond",
    },
  ]);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const filteredPosts =
    selectedTab === "all"
      ? posts
      : selectedTab === "popular"
      ? posts.sort((a, b) => b.votes - a.votes)
      : posts.sort((a, b) => b.id - a.id);

  return (
    <div className="container mt-3">
      <div className="tabs">
        <button
          className={`tab-button ${selectedTab === "all" ? "active" : ""}`}
          onClick={() => handleTabClick("all")}
        >
          All
        </button>
        <button
          className={`tab-button ${selectedTab === "popular" ? "active" : ""}`}
          onClick={() => handleTabClick("popular")}
        >
          Popular
        </button>
        <button
          className={`tab-button ${selectedTab === "new" ? "active" : ""}`}
          onClick={() => handleTabClick("new")}
        >
          New
        </button>
      </div>
      <div className="posts">
        {filteredPosts.map((post) => (
<div onClick={()=>navigate(`/${post.title}`)} key={post.id} className="post">
            <h3 className="post-title mt-5">{post.title}</h3>
            <p className="post-votes"> {post.votes}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
