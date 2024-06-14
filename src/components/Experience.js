// src/components/Experience.js
import React from 'react';

const Experience = () => (
  <section className="resume-section" id="experience">
    <div className="resume-section-content">
      <h2 className="mb-5">Experience</h2>
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">Job Title</h3>
          <div className="subheading mb-3">Company Name</div>
          <p>Description of your job responsibilities and achievements.</p>
        </div>
        <div className="flex-shrink-0"><span className="text-primary">Date Range</span></div>
      </div>
    </div>
  </section>
);

export default Experience;
