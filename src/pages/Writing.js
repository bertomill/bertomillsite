import React, { useEffect, useState } from 'react';
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

  const handleCardClick = (article) => {
    setSelectedArticle(article);
  };

  const closeModal = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="page">
      <h1>Writing</h1>
      {error && <p className="error">{error}</p>}
      <div className="articles">
        {articles.map((article, index) => (
          <div key={index} className="article-card" onClick={() => handleCardClick(article)}>
            <h2>{article.title}</h2>
            <p>{new Date(article.pubDate).toLocaleDateString()}</p>
            <p dangerouslySetInnerHTML={{ __html: article.description }}></p>
            <div className="read-on-medium">
              <a href={article.link} target="_blank" rel="noopener noreferrer">Read on Medium</a>
            </div>
          </div>
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
