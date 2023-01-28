import React from 'react';
import ImportantLinks from './ImportantLinks';
import ContactInfo from './ContactInfo';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="footer">
      <div style={{ width: '100px', height: '100px', marginBlock: '20px' }}>
        <img
          src={`https://media.licdn.com/dms/image/C5603AQFleZQ8sGJRMg/profile-displayphoto-shrink_800_800/0/1646405052838?e=1680134400&v=beta&t=QRB24tyLwYN6sF1CjhIzCJmxwGHNQXkqUOv_ht427EU`}
          alt="image"
          style={{ width: '100%', height: '100%', borderRadius: '50%' }}
        />
      </div>
      <ImportantLinks />
      <ContactInfo />
      <SocialLinks />
    </footer>
  );
};
export default Footer;
