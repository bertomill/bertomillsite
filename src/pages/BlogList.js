// src/pages/BlogList.js
import React from 'react';
import { Link } from 'react-router-dom';
import blogPosts from '../data/blogPosts.json';
import '../styles/BlogList.css'; // Update path to styles folder

const BlogList = () => {
  return (
    <div className="blog-list">
      <h1>Blog Posts</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id} className="blog-list-item">
            <Link to={`/post/${post.id}`}>
              <h2>{post.title}</h2>
              <p>{post.author} · {post.readTime} min read · {post.date}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
