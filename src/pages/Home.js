// src/pages/Home.js
import React from 'react';
import About from '../components/About';
import AIInteraction from '../components/AIInteraction';
import '../styles/Home.css';

const Home = () => (
  <div className="home">
    <AIInteraction />
    <About />
  </div>
);

export default Home;
