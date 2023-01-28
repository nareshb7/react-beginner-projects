import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home/Index';
import About from './about/Index';

const RoutesComp = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
};
export default RoutesComp;
