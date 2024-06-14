import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../styles/Slides.css';

const images = [
  process.env.PUBLIC_URL + '/assets/img/BM-Ivey-2023.jpeg',
  process.env.PUBLIC_URL + '/assets/img/BM-IBM-2023.jpeg',
  process.env.PUBLIC_URL + '/assets/img/BM-CIBC-2023.jpeg',
  process.env.PUBLIC_URL + '/assets/img/PNP.png',
  process.env.PUBLIC_URL + '/assets/img/Pinpoint.png',
  process.env.PUBLIC_URL + '/assets/img/Shivam.png',
];

const descriptions = [
  'Venture Capital Case Competition 2023',
  'IBM Conference 2023',
  'CIBC Design Innovation Studio 2023',
  'Plug and Play Sunnyvale, CA 2022',
  'First client for Scelta app - Pinpoint Carpentry 2023',
  'CIBC Enterprise Innovation 2024'
];

const Slides = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Display two slides at once
    slidesToScroll: 2, // Scroll two slides at a time
    autoplay: false, // Disable autoplay
    pauseOnHover: true,
  };

  return (
    <div className="slideshow">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt="Slideshow" className="slideshow-image" />
            <div className="image-description">{descriptions[index]}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slides;
