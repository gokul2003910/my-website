import React from 'react'
import './MobileNav.css'

const MobileNav = ({ isOpen, toggleMenu, handleButtonClick }) => {
  return (
    <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
      <div className='mobile-menu-container'>
        <ul>
            <li><a className='menu-item'>Home</a></li>
            <li><a className='menu-item'>Skills</a></li>
            <li><a className='menu-item'>Experience</a></li>
            <li><a className='menu-item'>Contact</a></li>
            <li><button className='contact-btn' onClick={handleButtonClick}>Hire Me</button></li>
        </ul>
      </div>
    </div> 
  )
}

export default MobileNav
