// src/components/BlogPost.js
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { useParams } from 'react-router-dom';
import blogPosts from '../data/blogPosts.json';
import '../styles/BlogPost.css';

const BlogPost = () => {
  const { postId } = useParams();
  const post = blogPosts.find(post => post.id === postId);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="blog-post">
      <h1>{post.title}</h1>
      <h2>{post.author}</h2>
      <p>{post.readTime} min read · {post.date}</p>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}
        children={post.content}
      />
      {post.video && (
        <div className="video-container">
          <video controls>
            <source src={post.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default BlogPost;
