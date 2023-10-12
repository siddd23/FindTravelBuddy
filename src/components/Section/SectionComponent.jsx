import React from 'react';
import './SectionComponent.css'; // Import your CSS file

const SectionComponent = ({ title, description, imageSrc }) => {
  return (
    // <div className="section-container">
      <div className="section">
        <img src={imageSrc} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    // </div>
  );
};

export default SectionComponent;
