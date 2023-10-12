import React from 'react';
import './SecondSectionComponent.css'; // Import your CSS file

const SectionComponent = ({ heading, description,emoji}) => {
  return (
    <div className="section">
     
      <div className="section-content">
        <h2> {emoji} {heading}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SectionComponent;