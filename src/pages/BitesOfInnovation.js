// src/pages/BitesOfInnovation.js
import React from 'react';
import '../styles/BitesOfInnovation.css';

const BitesOfInnovation = () => {
  return (
    <div className="bites-of-innovation">
      <h1>Bites of Innovation</h1>
      <p>Here are some short videos about the history of innovation:</p>
      <div className="video-gallery">
        {/* Example Video Embed */}
        <div className="video">
          <iframe src="https://www.youtube.com/embed/example" title="Innovation Video 1" frameBorder="0" allowFullScreen></iframe>
        </div>
        {/* Add more videos here */}
      </div>
    </div>
  );
};

export default BitesOfInnovation;
