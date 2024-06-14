import React from 'react';
import '../styles/Footer.css';
import linkedin from '../assets/linkedin.png';
import medium from '../assets/medium.png';
import github from '../assets/github.png';
import twitter from '../assets/twitter.png';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-section about">
        <h2 className="footer-title">About Me</h2>
        <p>Building software and AI solutions to bring good to the world responsibly.</p>
      </div>
      <div className="footer-section links">
        <h2 className="footer-title">Quick Links</h2>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/writing">Writing</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div className="footer-section social">
        <h2 className="footer-title">Follow Me</h2>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/bertomill" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://medium.com/@bertomill" target="_blank" rel="noopener noreferrer">
            <img src={medium} alt="Medium" className="social-icon" />
          </a>
          <a href="https://github.com/bertomill" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" className="social-icon" />
          </a>
          <a href="https://twitter.com/mill_berto" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="Twitter" className="social-icon" />
          </a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      &copy; {new Date().getFullYear()} Berto. All rights reserved.
    </div>
  </footer>
);

export default Footer;
