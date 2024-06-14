import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Writing from './pages/Writing';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import SiftAI from './pages/SiftAI';
import './styles/App.css';

const App = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleAskQuestion = async () => {
    const response = await fetch('https://your-vercel-backend-url.vercel.app/api/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question }),
    });
    const data = await response.json();
    setAnswer(data.answer);
  };

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/sift-ai" element={<SiftAI />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <div>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask me anything"
          />
          <button onClick={handleAskQuestion}>Ask</button>
          <p>{answer}</p>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
