import React from 'react';

const ContactInfo = () => {
  return (
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
            <a href="mailto:nareshbjava7@gmail.com"> nareshbjava7@gmail.com</a>
          </span>
        </li>
        <li>
          <span>Address: </span>
          <address>KPHB Colony, Hyderabad , T.S- 500072</address>
        </li>
      </ul>
    </div>
  );
};
export default ContactInfo;
