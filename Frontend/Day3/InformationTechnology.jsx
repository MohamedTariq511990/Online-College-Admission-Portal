// InformationTechnology.jsx

import React from 'react';
import './InformationTechnology.css';
import Navbar from './Navbar';


const InformationTechnology = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className='it-di'>
        <br/><br/><br/><br/><br/><br/><br/>
    <div className="it-container">
      <h1 className="it-heading">Information Technology</h1>
      <p className="it-description">
        Welcome to the Information Technology section. This is where you can find
        information related to the latest technologies, trends, and innovations
        in the IT industry.
      </p>
      <div className="it-featured-topics">
        <h2 className="it-subheading">Featured Topics</h2>
        <ul className="it-topic-list">
          <li>Web Development with React.js</li>
          <li>Mobile App Development</li>
          <li>Cloud Computing</li>
          <li>Data Science and Analytics</li>
        </ul>
      </div>
      {/* Add more sections and content as needed */}
    </div>
    </div>
    </>
  );
};

export default InformationTechnology;
