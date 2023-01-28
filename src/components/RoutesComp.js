import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home/Index';
import About from './about/Index';
import Projects from './projects/Index'

const RoutesComp = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path='projects/*' element={<Projects/> } />
      </Routes>
    </div>
  );
};
export default RoutesComp;
