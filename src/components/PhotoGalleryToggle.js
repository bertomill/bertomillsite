// src/components/PhotoGalleryToggle.js
import React, { useState, useEffect } from 'react';
import PhotoGallery from './PhotoGallery';
import '../styles/PhotoGallery.css';

const PhotoGalleryToggle = () => {
  const [galleryVisible, setGalleryVisible] = useState(false);

  const toggleGalleryVisibility = () => {
    setGalleryVisible(!galleryVisible);
  };

  useEffect(() => {
    if (galleryVisible) {
      const gallery = document.getElementById('lightgallery');
      if (gallery) {
        import('lightgallery').then(lightGallery => {
          lightGallery.default(gallery, {
            plugins: [require('lightgallery/plugins/thumbnail').default, require('lightgallery/plugins/zoom').default],
            speed: 500,
            mode: 'lg-fade',
            closable: true,
            escKey: true,
            keyPress: true,
          });
        });
      }
    }
  }, [galleryVisible]);

  return (
    <div className="photo-gallery-toggle">
      <i className="fas fa-photo-video photo-icon" onClick={toggleGalleryVisibility}></i>
      {galleryVisible && <PhotoGallery />} {/* Conditionally render PhotoGallery */}
    </div>
  );
};

export default PhotoGalleryToggle;
