import React from 'react';
import { NavLink } from 'react-router-dom';

const ProjectsNav = () => {
  return (
    <nav className="nav-home" style={{ backgroundColor: '#354ad2' }}>
      <ul>
        <li>
          <NavLink to="agecalculator">AgeCalculator</NavLink>
        </li>
        <li>
          <NavLink to="calculator">Calculator</NavLink>
        </li>
        <li>
          <NavLink to="speedcalculator">Speed Calculator</NavLink>
        </li>
        <li>
          <NavLink to="stopwatch">Stopwatch </NavLink>
        </li>
        <li>
          <NavLink to="todo">Todo</NavLink>
        </li>
        <li>
          <NavLink to="weatherapp">Weather App</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default ProjectsNav;
