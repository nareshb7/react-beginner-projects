import React from 'react';
import Carousel from './Carousel';
import Footer from '../footer/Index';

/* 
https://media.licdn.com/dms/image/C5603AQFleZQ8sGJRMg/profile-displayphoto-shrink_800_800/0/1646405052838?e=1680134400&v=beta&t=QRB24tyLwYN6sF1CjhIzCJmxwGHNQXkqUOv_ht427EU
*/

const Home = () => {
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h1>Hiii This is Naresh Baleboina</h1>
        <h3>A Passionate Frontend Developer From Hyderabad.</h3>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          marginBlock: '10px',
        }}
      >
        <div
          style={{
            borderRadius: '10px',
            display: 'inline-block',
            width: '300px',
            height: '300px',
          }}
        >
          <img
            src={`https://media.licdn.com/dms/image/C5603AQFleZQ8sGJRMg/profile-displayphoto-shrink_800_800/0/1646405052838?e=1680134400&v=beta&t=QRB24tyLwYN6sF1CjhIzCJmxwGHNQXkqUOv_ht427EU`}
            style={{ width: '100%', height: '100%' }}
            alt="image"
          />
        </div>
        <div style={{ textAlign: 'center' }}>
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
