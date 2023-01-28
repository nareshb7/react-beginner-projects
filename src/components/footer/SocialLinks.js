import React from 'react';

const SocialLinks = () => {
  return (
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
  );
};
export default SocialLinks;
