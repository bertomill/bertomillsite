// src/pages/Writing.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Writing.css';
import { fetchMediumArticles } from '../utils/fetchMediumArticles';
import Modal from '../components/Modal';

const Writing = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const articles = await fetchMediumArticles();
        setArticles(articles);
      } catch (err) {
        console.error('Error fetching articles in Writing component:', err);
        setError(err.message);
      }
    };

    fetchArticles();
  }, []);

  const closeModal = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="page">
      <h1>My articles</h1>
      <p className="description">
        Staying on the cutting edge of technology and industry trends. Our mission is to keep professionals like you informed with the latest news, data, and updates that matter. Whether you're a tech enthusiast, an industry leader, or a forward-thinking professional, our content is designed to provide you with the insights and information you need to stay ahead in today's fast-paced world. Join us as we explore the innovations and developments shaping the future, and empower yourself with the knowledge to thrive in your field.
      </p>
      {error && <p className="error">{error}</p>}
      <div className="articles">
        {articles.map((article, index) => (
          <Link key={index} to={`/writing/${index}`} className="article-card">
            <h2>{article.title}</h2>
            <p>{new Date(article.pubDate).toLocaleDateString()}</p>
            <p dangerouslySetInnerHTML={{ __html: article.description }}></p>
            <div className="read-on-medium">
              <a href={article.link} target="_blank" rel="noopener noreferrer">Read on Medium</a>
            </div>
          </Link>
        ))}
      </div>
      {selectedArticle && (
        <Modal
          isOpen={!!selectedArticle}
          onClose={closeModal}
          article={selectedArticle}
        />
      )}
    </div>
  );
};

export default Writing;
