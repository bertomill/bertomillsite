import React, { useState, useEffect } from 'react';
import axios from 'axios';
import anime from 'animejs';
import ThreeDScene from './3DScene';
import '../styles/AIInteraction.css';

const AIInteraction = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState("Hi, I'm Berto's AI. I don't know much about Berto but I can answer some general questions.");
  const [isLoading, setIsLoading] = useState(false);

  const questionsAndAnswers = {
    "who is berto": "Berto Mill is an innovation strategy consultant at CIBC. He loves writing, coding, reading, cooking, playing sports, travelling, exploring art, and listening to music.",
    "what are berto's hobbies": "Berto's main hobbies are writing, coding, reading, cooking, playing sports, travelling, exploring art, and listening to music.",
    "what projects has berto worked on": "Berto recently worked on an AI news app called Lens AI where he leveraged news APIs to gather relevant headlines on artificial intelligence for investors.",
    "what are berto's short term goals": "Berto's short-term goal is to work on the cutting edge of technology with like-minded people, specifically in digital and AI.",
    "what books does berto like": "Berto enjoys reading books like The Talent Code, Innovation Stack, Happiness on Demand, and The 5 AM Club.",
    "what is berto's favorite movie": "Berto's favorite movie is Longest Yard.",
    "how does berto prefer to learn": "Berto's preferred learning style is hands-on experience.",
    "what skills is berto currently working on": "Berto is currently focusing on learning about large language models, API calls, how the internet works, and web development.",
    "what are berto's favorite travel destinations": "Berto's favorite travel destinations are Italy and Japan for their beauty and art.",
    "what is berto passionate about": "Berto loves fitness and is a huge advocate of mental and physical health. He wants to inspire others to be more healthy and fit."
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
              content: `My name is Berto Mill. I'm an innovation strategy consultant at Canadian Imperial Bank of Commerce (CIBC). My main hobbies are writing, coding, reading, cooking, playing any kind of sport, travelling, exploring art, and listening to music. Some of the recent projects I've worked on include an AI news app called Lens AI where I leveraged news APIs to gather relevant headlines on artificial intelligence for investors. My short-term aspirations are to continue to work on the cutting edge of technology with like-minded people, specifically in digital and AI. My favorite books are The Talent Code, Innovation Stack, Happiness on Demand, and The 5 AM Club. My favorite movie is Longest Yard. My preferred learning style is hands-on experience. The current skills I'm working on include learning about large language models, API calls, how the internet works, and web development. My favorite travel destinations are Italy or Japan for their beauty and art. I love fitness. I'm a huge advocate of mental and physical health and I want to inspire others to be more healthy and fit. Here is my message: ${input}` 
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
    </div>
  );
};

export default AIInteraction;
