import React from 'react'
import './ExperienceCard.css'

const ExperienceCard = ({details}) => {
  return (
    <div className='work-experience-card'>
      <h6>{details.title}</h6>

      <ul>
        {details. description.map((item) =>(
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default ExperienceCard

