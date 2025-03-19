// EducationCards.js

import React from 'react';
import "./Education.css";
import { IoSchoolOutline } from "react-icons/io5";


const EducationCard = () => {
  const educationData = [
    {
      id: 1,
      institution: 'Bharati Vidyapeeth\'s Institute of Computer Applications',
      degree: 'Master Of Computer Application',
      year: '2021 - 2023',
      imageSrc: "https://placekitten.com/150/150",
      score:85 // Replace with your image URL
    },
    {
      id: 2,
      institution: 'Bhaskaracharya College of applied Science (University of Delhi)',
      degree: 'Bachelor of Instrumentation Honours',
      year: '2017 - 2020',
      imageSrc: 'https://placekitten.com/150/151',
      score:61 // Replace with your image URL
    },
    {
      id: 3,
      institution: 'Govt. Boys Senior Secodary School',
      degree: 'Intermediate Education',
      year: '2015 - 2017',
      imageSrc: 'https://placekitten.com/150/152',
      score: 78 // Replace with your image URL
    },
  ];

  return (
    <div className="education-cards">
      {educationData.map((education) => (
        <div key={education.id} className="education-card" data-aos="fade-up">
          <div className="education-content">
            <h3 >{education.institution}</h3>
            <strong><p className='purple'>{education.degree}</p></strong>
            <p>{education.year}</p>
            <p>Score: {education.score}%</p>
          </div>
          <div className="education-image">
          <IoSchoolOutline />
            {/* <img src={education.imageSrc} alt={`${education.institution} Logo`} /> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationCard;
