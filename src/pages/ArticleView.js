// src/pages/ArticleView.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ArticleView.css';
import { fetchMediumArticles } from '../utils/fetchMediumArticles';

const ArticleView = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const articles = await fetchMediumArticles();
        const selectedArticle = articles[articleId];
        setArticle(selectedArticle);
      } catch (err) {
        console.error('Error fetching article in ArticleView component:', err);
        setError(err.message);
      }
    };

    fetchArticle();
  }, [articleId]);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="article-view">
      <h1>{article.title}</h1>
      <p>{new Date(article.pubDate).toLocaleDateString()}</p>
      {article.thumbnail && <img src={article.thumbnail} alt={article.title} />}
      <div className="article-content" dangerouslySetInnerHTML={{ __html: article.fullDescription }}></div>
      <div className="read-on-medium">
        <a href={article.link} target="_blank" rel="noopener noreferrer">Read on Medium</a>
      </div>
    </div>
  );
};

export default ArticleView;
