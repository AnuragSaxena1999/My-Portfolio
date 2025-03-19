// ExperienceCards.js

import React from 'react';
import "./Experience.css";
import logyify from "./logyify.jpg";
import comviva from "./comviva-logo.png";

const Experience = () => {
  const experienceData = [
    {
      id: 1,
      company: 'Logyify India',
      position: 'Software Tester',
      year: 'Jan 2024 - Feb 2025',
      imageSrc: logyify
    },
    {
      id: 2,
      company: 'Comviva',
      position: 'Manual Testing Intern',
      year: 'Aug 2023 - Dec 2023',
      imageSrc: comviva , 
    },
  ];

  return (
    <div className="experience-cards">
      {experienceData.map((experience) => (
        <div key={experience.id} className="experience-card" data-aos="fade-up">
          <div className="experience-content">
            <h3>{experience.company}</h3>
            <p>{experience.position}</p>
            <p>{experience.year}</p>
          </div>
          <div className="experience-image">
            <img src={experience.imageSrc} alt={`${experience.company} Logo`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
