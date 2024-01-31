
// Home.js
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './HomePage.css';

const Home = () => {
  const images = [
    
    'https://cdn.wallpapersafari.com/72/68/GzLqj6.jpg',
    'https://www.travelandleisure.com/thmb/E5szi7N2r1eN-8b3vkl5STvWz9o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/notre-dame-university-COLLEGECAMP0421-039ce0bfd40b4e429b825c6fb6ebfaa6.jpg',
    'https://s2.research.com/wp-content/uploads/2020/12/24120822/50-most-beautiful-college-campuses-in-America-1-1200x600.jpg',
    'https://pbs.twimg.com/media/ECqMlZxWsAEjaeG?format=jpg&name=4096x4096',
    'https://cdn.britannica.com/51/189951-050-81EDCED8/University-of-Notre-Dame-Indiana.jpg',
  ];

  // State to keep track of the currently displayed image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle changing the displayed image
  const changeImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // useEffect to automatically change the image every 2 seconds
  useEffect(() => {
    const intervalId = setInterval(changeImage, 2000);

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id ='hp'className="home-page">
      <Navbar />

      <header>
        <h1 id ='hp'>Welcome to the Online Admission Portal</h1>
      </header>
      <div id ='hp'>
        <center>
      <img style={{width: '1500px', height: '500px'}} src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      </center>
    </div>
      
    <center>
      <footer>
       <p>&copy;  2024 Online Admission Portal. All rights reserved.</p>
      </footer></center>
    </div>
  );
};

export default Home;


/*
*/