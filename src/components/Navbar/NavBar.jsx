import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import MobileNav from '../MobileNav/MobileNav';

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleButtonClick = () => {
    // Define the action you want to perform when the button is clicked
    console.log('Button clicked'); // For example, this logs a message to the console
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className='nav-wrapper'>
        <div className='nav-content'>
          <img className="logo" src="./assets/images/logo.png" alt="Logo" />
          <ul>
            <li>
              <Link className='menu-item' to="hero" smooth={true} duration={500}>Home</Link>
            </li>
            <li>
              <Link className='menu-item' to="skills" smooth={true} duration={500}>Skills</Link>
            </li>
            <li>
              <Link className='menu-item' to="workExperience" smooth={true} duration={500}>Experience</Link>
            </li>
            <li>
              <Link className='menu-item' to="contactMe" smooth={true} duration={500}>Contact</Link>
            </li>
            <button className='contact-btn' onClick={handleButtonClick}>Hire Me</button>
          </ul>
          <button className='menu-btn' onClick={toggleMenu}>
            <span className="material-symbols-outlined" style={{ fontSize: "1.8rem" }}>
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
