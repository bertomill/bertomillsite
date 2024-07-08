// src/components/AIInteraction.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import anime from 'animejs';
import ThreeDScene from './3DScene';
import PhotoGalleryToggle from './PhotoGalleryToggle'; // Ensure this import is correct
import '../styles/AIInteraction.css';

const AIInteraction = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState("👋 Hi, I'm Berto's AI. What can I do for you today?");
  const [isLoading, setIsLoading] = useState(false);

  const questionsAndAnswers = {
    // Your predefined questions and answers...
  };

  const handleInputChange = (e) => {
    setInput(e.target.value.toLowerCase());
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    let answer = questionsAndAnswers[input];
    if (!answer) {
      try {
        const res = await axios.post('https://api.openai.com/v1/chat/completions', {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
              content: `Berto Mill is an innovation strategy consultant at CIBC.You are a helpful assistant for Berto Mill - answer questions from visitors to Berto's website: ${input}`
            }
          ],
          max_tokens: 150,
        }, {
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
        });

        answer = res.data.choices[0].message.content;
      } catch (error) {
        console.error('Error:', error);
        answer = 'Error connecting to AI model. ' + (error.response ? error.response.data.error.message : error.message);
      }
    }

    setResponse(answer);
    setIsLoading(false);
  };

  useEffect(() => {
    if (response) {
      anime({
        targets: '.ai-response',
        opacity: [0, 1],
        translateY: [-10, 0],
        easing: 'easeOutExpo',
        duration: 500,
      });
    }
  }, [response]);

  return (
    <div className="ai-interaction">
      <div className="mission-statement">
        <p>Responsibly, and resiliently innovating for a better tomorrow.</p>
      </div>
      <ThreeDScene />
      <div className="chat-box-container">
        <form onSubmit={handleFormSubmit} className="ai-interaction-form">
          <div className="input-container">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Type your message..."
              required
            />
            <button type="submit" disabled={isLoading}>
              <span className="arrow">↑</span>
            </button>
          </div>
        </form>
        {response && <p className="ai-response">{response}</p>}
      </div>
      <PhotoGalleryToggle /> {/* Ensure this component is correctly used */}
    </div>
  );
};

export default AIInteraction;
