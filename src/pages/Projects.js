// src/pages/Projects.js
import React from 'react';
import '../styles/Projects.css';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Sift AI',
    description: 'A web application that provides insights, analysis, and data exclusively on AI topics. It tracks how major global banks are using AI and includes news, earnings calls, annual reports, data analysis on the AI landscape, regulatory updates, and research institute updates on AI.',
    link: '/projects/sift-ai',
  },
  // Add more projects here as needed
];

const Projects = () => (
  <div className="page">
    <h1>Projects</h1>
    
    <div className="project-list">
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <Link to={project.link} className="project-link">Learn More</Link>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
