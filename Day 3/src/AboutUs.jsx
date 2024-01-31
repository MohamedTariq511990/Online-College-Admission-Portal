// AboutUs.jsx

import React from 'react';
import './AboutUs.css';
import Navbar from './Navbar';

const AboutUs = () => {
  return (
    <div className='ab'>
      <Navbar></Navbar>
      <br/><br/><br/><br/><br/><br/><br/><br/>
    <div className="about-us-container">
      <h1 className="about-us-heading">About Us</h1>
      <p className="about-us-description">
        Welcome to our Online College Admission Portal! We are dedicated to providing
        a seamless and efficient admission process for students and colleges alike.
        Our platform aims to simplify the complex admission procedures and connect
        aspiring students with their dream educational institutions.
      </p>
      <div className="about-us-mission">
        <h2 className="about-us-subheading">Our Mission</h2>
        <p>
          Our mission is to make the college admission process accessible, transparent,
          and user-friendly. We strive to empower students in pursuing higher education
          and help colleges in selecting the best candidates.
        </p>
      </div>
      <div className="about-us-team">
        <h2 className="about-us-subheading">Our Team</h2>
        <p>
          Meet our dedicated team of professionals who are passionate about education
          and technology. We work collaboratively to provide innovative solutions
          that enhance the admission experience for both students and colleges.
        </p>
      </div>
      {/* Add more sections and content as needed */}
    </div>
    </div>
  );
};

export default AboutUs;
