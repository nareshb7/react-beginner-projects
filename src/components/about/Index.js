import React from 'react';
import Study from './Study';
import Address from './Address';
import Experience from './Experience';
import Skills from './Skills';
import Introduction from './Introduction';
import './About.css';

const About = () => {
  return (
    <div className="about-main">
      <h1>About : </h1>
      <Introduction />
      <Study />
      <Address />
      <Experience />
      <Skills />
    </div>
  );
};
export default About;
