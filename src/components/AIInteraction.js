// src/components/AIInteraction.js
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/AIInteraction.css';

const AIInteraction = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setResponse('');

    // Debugging line to check if API key is correctly loaded
    console.log('API Key:', process.env.REACT_APP_OPENAI_API_KEY);

    try {
      const res = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: input }],
        max_tokens: 150,
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      });

      setResponse(res.data.choices[0].message.content);
    } catch (error) {
      console.error('Error:', error);
      setResponse('Error connecting to AI model. ' + (error.response ? error.response.data.error.message : error.message));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="ai-interaction">
      <form onSubmit={handleFormSubmit} className="ai-interaction-form">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message..."
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Talking...' : 'Talk to AI'}
        </button>
      </form>
      {response && <p className="ai-response">{response}</p>}
    </div>
  );
};

export default AIInteraction;
