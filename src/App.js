// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import BlogList from './pages/BlogList';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import SiftAI from './pages/SiftAI';
import Writing from './pages/Writing';
import BlogContent from './components/BlogContent'; // Corrected import

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<BlogList />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/sift-ai" element={<SiftAI />} />
      <Route path="/writing" element={<Writing />} />
      <Route path="/blog/:id" element={<BlogContent />} /> {/* Ensure the path is correct */}
    </Routes>
  </Router>
);

export default App;
