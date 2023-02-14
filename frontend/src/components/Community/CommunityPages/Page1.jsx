import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Css/Page.css';

const Page = () => {
  const [selectedTab, setSelectedTab] = useState('all');
  const [posts, setPosts] = useState([
    { id: 1, title: 'How to fix a bug in React', votes: 10 },
    { id: 2, title: 'Best practices for Node.js development', votes: 5 },
    { id: 3, title: 'MongoDB vs. MySQL: Which is better?', votes: 15 },
    { id: 4, title: 'Introduction to GraphQL', votes: 20 },
    { id: 4, title: 'Introduction to GraphQL', votes: 20 },
    { id: 1, title: 'How to fix a bug in React', votes: 10 },
    { id: 2, title: 'Best practices for Node.js development', votes: 5 },
    { id: 3, title: 'MongoDB vs. MySQL: Which is better?', votes: 15 },
    { id: 4, title: 'Introduction to GraphQL', votes: 20 },
    { id: 4, title: 'Introduction to GraphQL', votes: 20 },
    { id: 1, title: 'How to fix a bug in React', votes: 10 },
    { id: 2, title: 'Best practices for Node.js development', votes: 5 },
    { id: 3, title: 'MongoDB vs. MySQL: Which is better?', votes: 15 },
    { id: 4, title: 'Introduction to GraphQL', votes: 20 },
    { id: 4, title: 'Introduction to GraphQL', votes: 20 },
    { id: 1, title: 'How to fix a bug in React', votes: 10 },
    { id: 2, title: 'Best practices for Node.js development', votes: 5 },
    { id: 3, title: 'MongoDB vs. MySQL: Which is better?', votes: 15 },
    { id: 4, title: 'Introduction to GraphQL', votes: 20 },
    { id: 4, title: 'Introduction to GraphQL', votes: 20 },

  ]);
  
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  
  const filteredPosts = selectedTab === 'all'
    ? posts
    : selectedTab === 'popular'
    ? posts.sort((a, b) => b.votes - a.votes)
    : posts.sort((a, b) => b.id - a.id);
  
  return (
    <div className="container mt-3">
      <div className="tabs">
        <button
          className={`tab-button ${selectedTab === 'all' ? 'active' : ''}`}
          onClick={() => handleTabClick('all')}
        >
          All
        </button>
        <button
          className={`tab-button ${selectedTab === 'popular' ? 'active' : ''}`}
          onClick={() => handleTabClick('popular')}
        >
          Popular
        </button>
        <button
          className={`tab-button ${selectedTab === 'new' ? 'active' : ''}`}
          onClick={() => handleTabClick('new')}
        >
          New
        </button>
      </div>
      <div className="posts">
        {filteredPosts.map((post) => (
          <div key={post.id} className="post">
            <h3 className="post-title mt-5">{post.title}</h3>
            <p className="post-votes">Votes: {post.votes}</p>
            <Link to="/chat" >message</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;