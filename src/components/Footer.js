import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#555',
        display: 'flex',
        justifyContent: 'space-evenly',
      }}
      className="footer"
    >
      <div>
        <img src="#" alt="image" />
      </div>
      <div style={{ marginBlock: '10px' }}>
        <h3 style={{ marginBlock: '5px' }}>Important Links :</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div style={{ marginBlock: '10px' }}>
        <h3 style={{ marginBlock: '5px' }}>Contact Info : </h3>
        <ul>
          <li>
            <span>Naresh Baleboina</span>{' '}
          </li>
          <li>
            <span>
              Mobile : <a href="tel: +919010586402">9010586402</a>{' '}
            </span>{' '}
          </li>
          <li>
            <span>
              Email :{' '}
              <a href="mailto :nareshbjava7@gmail.com">
                {' '}
                nareshbjava7@gmail.com
              </a>
            </span>
          </li>
          <li>
            <span>Address: </span>
            <address>KPHB Colony, Hyderabad , T.S- 500072</address>
          </li>
        </ul>
      </div>
      <div style={{ marginBlock: '10px' }}>
        <h3 style={{ marginBlock: '5px' }}>Social Links :</h3>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/naresh-baleboina-18615922a/"
              target="_blank"
            >
              LinkedIn{' '}
            </a>{' '}
          </li>
          <li>
            <a href="https://github.com/nareshb7" target="_blank">
              Github
            </a>{' '}
          </li>
          <li>
            <a href="https://instagram.com/nareshgoud_1914/" target="_blank">
              Instagram
            </a>{' '}
          </li>
          <li>
            <a href="https://facebook.com/sisindri.baleboina" target="_blank">
              Facebook
            </a>{' '}
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
