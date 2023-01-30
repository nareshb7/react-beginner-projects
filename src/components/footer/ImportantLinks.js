import React from 'react';
import { NavLink } from 'react-router-dom';

const ImportantLinks = () => {
  return (
    <div style={{ marginBlock: '10px' }}>
      <h3 style={{ marginBlock: '5px' }}>Important Links :</h3>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>{' '}
        </li>
        <li>
          <NavLink to="/about">About</NavLink>{' '}
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/">Contact Us</NavLink>{' '}
        </li>
      </ul>
    </div>
  );
};
export default ImportantLinks;
