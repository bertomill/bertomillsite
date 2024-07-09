// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Writing from './pages/Writing';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import SiftAI from './pages/SiftAI';
import ArticleView from './pages/ArticleView';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/sift-ai" element={<SiftAI />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/writing/:articleId" element={<ArticleView />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
