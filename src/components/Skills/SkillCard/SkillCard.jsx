// SkillCard.jsx
import React from 'react';
import './SkillCard.css';

const SkillCard = ({ isActive, onClick, iconUrl, title }) => {
  return (
    <div className={`skills-card ${isActive ? "active" : ""}`} onClick={onClick}>
      <div className='skill-icon'>
        <img src={iconUrl} alt={title} />
      </div>
      <span>{title}</span>
    </div>
  );
};

export default SkillCard;

