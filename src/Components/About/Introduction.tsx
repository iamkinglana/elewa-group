import React from 'react';
import '../styles/aboutIntroduction.css';
import NavBar from '../Top-Bottom/NavBar';

interface DataItem {
  heading: string;
  description: string;
  heading3:string
}

const data: DataItem[] = [
  {
    heading: "HOW TO RECOGNIZE AN ELEWA MEMBER",
    description: "Dependable, Creative, Supportive, Open Minded and Fun*",
    heading3:"*SERIOUS WHEN IT MATTERS"
  }
];


// This component displays the navigation bar and the introduction section
const Introduction: React.FC<{}> = () => {
  return (
    <div className="introduction">
        <NavBar />
        {data.map((item, index) => (
        <div key={index} className="introduction-content">
            <h2>{item.heading}</h2>
            <p>{item.description}</p>
            <h3>{item.heading3}</h3>
        </div>
        ))}
    </div>
  )
}

export default Introduction
