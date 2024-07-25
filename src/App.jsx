import React from 'react';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import WorkExperience from './components/WorkExperience/WorkExperience';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <NavBar />
      <div className='container'>
        <section id="hero">
          <Hero />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="workExperience">
          <WorkExperience />
        </section>
        <section id="contactMe">
          <ContactMe />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default App;
