// src/components/Modal.js
import React from 'react';
import '../styles/Modal.css';

const Modal = ({ isOpen, onClose, article }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>&times;</button>
        <h2>{article.title}</h2>
        <p>{new Date(article.pubDate).toLocaleDateString()}</p>
        <p dangerouslySetInnerHTML={{ __html: article.content }}></p>
        <div className="read-on-medium">
          <a href={article.link} target="_blank" rel="noopener noreferrer">Read on Medium</a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
