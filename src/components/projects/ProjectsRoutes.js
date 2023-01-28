import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AgeCalculator from './ageCalculator/Index';
import Calculator from './calculator/Index';
import SpeedCalc from './speedCalculator/Index';
import Stopwatch from './stopwatch/Index';
import Todo from './todo/Index';
import WeatherApp from './weatherApp/Index';

const ProjectsNav = () => {
  return (
    <div>
      <Routes>
        <Route path="agecalculator" element={<AgeCalculator />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="speedcalculator" element={<SpeedCalc />} />
        <Route path="stopwatch" element={<Stopwatch />} />
        <Route path="todo" element={<Todo />} />
        <Route path="weatherapp" element={<WeatherApp />} />
      </Routes>
    </div>
  );
};
export default ProjectsNav;
