import React from 'react';
import Study from './Study';
import Address from './Address';
import Experience from './Experience';
import Skills from './Skills';
import Introduction from './Introduction';

const About = () => {
  return (
    <div>
      About
      <Introduction />
      <Study />
      <Address />
      <Experience />
      <Skills />
    </div>
  );
};
export default About;
