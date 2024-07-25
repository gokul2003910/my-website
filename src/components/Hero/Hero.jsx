import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <section className='hero-container'>
      <div className='hero-content'>
        <h2>Crafting Inspiring Digital Experiences</h2>
        <p>Passionate Frontend Developer I Transforming Ideas into Seamless and Visually Stunning Web Solutions</p>
        <a href="./assets/images/gokul cv Resume.pdf" className="download-cv-btn" download>Download CV</a>

      </div>
      <div className='hero-img'>
        <div>
            <div className='tech-icon'>
                <img src="./assets/images/download (5).png" alt="" />
            </div>
            <img src="./assets/images/img11.jpg" alt="" />
        </div>
        <div>
          <div className='tech-icon'>
            <img src="./assets/images/download (6).png" alt="" />
          </div>
          <div className='tech-icon'>
            <img src="./assets/images/download (7).png" alt="" />
          </div>
          <div className='tech-icon'>
            <img src="./assets/images/download (8).png" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
};

export default Hero
