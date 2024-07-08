// src/components/PhotoGallery.js
import React from 'react';
import '../styles/PhotoGallery.css';

const PhotoGallery = () => {
  return (
    <div id="lightgallery">
      <a href={process.env.PUBLIC_URL + '/assets/img/BM-Ivey-2023.jpeg'}>
        <img src={process.env.PUBLIC_URL + '/assets/img/BM-Ivey-2023.jpeg'} alt="Venture Capital Case Competition 2023" />
      </a>
      <a href={process.env.PUBLIC_URL + '/assets/img/BM-IBM-2023.jpeg'}>
        <img src={process.env.PUBLIC_URL + '/assets/img/BM-IBM-2023.jpeg'} alt="IBM Conference 2023" />
      </a>
      <a href={process.env.PUBLIC_URL + '/assets/img/BM-CIBC-2023.jpeg'}>
        <img src={process.env.PUBLIC_URL + '/assets/img/BM-CIBC-2023.jpeg'} alt="CIBC Design Innovation Studio 2023" />
      </a>
      <a href={process.env.PUBLIC_URL + '/assets/img/PNP.png'}>
        <img src={process.env.PUBLIC_URL + '/assets/img/PNP.png'} alt="Plug and Play Sunnyvale, CA 2022" />
      </a>
      <a href={process.env.PUBLIC_URL + '/assets/img/Pinpoint.png'}>
        <img src={process.env.PUBLIC_URL + '/assets/img/Pinpoint.png'} alt="First client for Scelta app - Pinpoint Carpentry 2023" />
      </a>
      <a href={process.env.PUBLIC_URL + '/assets/img/Shivam.png'}>
        <img src={process.env.PUBLIC_URL + '/assets/img/Shivam.png'} alt="CIBC Enterprise Innovation 2024" />
      </a>
    </div>
  );
};

export default PhotoGallery;
