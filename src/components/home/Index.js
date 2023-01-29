import React from 'react';
import Carousel from './Carousel';
import Footer from '../footer/Index';
import './Home.css';

/* 
https://media.licdn.com/dms/image/C5603AQFleZQ8sGJRMg/profile-displayphoto-shrink_800_800/0/1646405052838?e=1680134400&v=beta&t=QRB24tyLwYN6sF1CjhIzCJmxwGHNQXkqUOv_ht427EU
*/

const Home = () => {
  return (
    <div style={{ backgroundColor: '#2a6cd2' }}>
      <div className="home-header">
        <h1>Hiii This is Naresh Baleboina</h1>
        <h3>A Passionate Frontend Developer From Hyderabad...</h3>
      </div>
      <div className="home-imgsection">
        <div className="image">
          <img
            src={`https://media.licdn.com/dms/image/C5603AQFleZQ8sGJRMg/profile-displayphoto-shrink_800_800/0/1646405052838?e=1680134400&v=beta&t=QRB24tyLwYN6sF1CjhIzCJmxwGHNQXkqUOv_ht427EU`}
            style={{ width: '100%', height: '100%', borderRadius: '10px' }}
            alt="image"
          />
        </div>
        <div style={{ textAlign: 'center' }} className="home-imgrightsection">
          <p>Let me Introduce Myself. </p>
          <h1>ABOUT ME </h1>
          <h5>
            I am an Electrical Enginerring Graduate, Presently I am Working as a
            React JS Developer, I Love to Code 24/7{' '}
          </h5>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
