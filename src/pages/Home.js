// src/pages/Home.js
import React from 'react';
import About from '../components/About';
import MissionStatement from '../components/MissionStatement';
import Slides from '../components/Slides';
import AIInteraction from '../components/AIInteraction';
import '../styles/Home.css';

const Home = () => (
  <div>
    <AIInteraction /> {/* Add the AI Interaction component */}
    <MissionStatement />
    <About />
    <Slides />
  </div>
);

export default Home;
