// src/pages/Projects.js
import React from 'react';
import '../styles/Projects.css';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'AI Lens',
    description: 'A web application that provides insights, analysis, and data exclusively on AI topics. It tracks how major global banks are using AI and includes news, earnings calls, annual reports, data analysis on the AI landscape, regulatory updates, and research institute updates on AI.',
    link: 'https://ainews-beta.vercel.app/',
    image: '/assets/img/AI Lens.png' // Add the image URL here
  },
  // Add more projects here as needed
];

const Projects = () => (
  <div className="page">
    <h1>Projects</h1>
    
    <div className="project-list">
      {projects.map((project, index) => (
        <div key={index} className="project">
          <img src={project.image} alt={`${project.title} logo`} className="project-image" />
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <Link to={project.link} className="project-link">Go To Project</Link>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
