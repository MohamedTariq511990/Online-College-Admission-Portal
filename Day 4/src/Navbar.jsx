// Navbar.jsx

import React, { useState } from 'react';
import './Navbar.css';
import {  useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
const Navbar = () => {
  const navigate= useNavigate();
  const [courseDropdown, setCourseDropdown] = useState(false);
  const [selectCourseDropdown, setSelectCourseDropdown] = useState(false);

  const toggleCourseDropdown = () => {
    setCourseDropdown(!courseDropdown);
  };

  const toggleSelectCourseDropdown = () => {
    setSelectCourseDropdown(!selectCourseDropdown);
  };

  return (
    <nav className="navbar">
      <ul>
        <li onClick={()=>navigate('/home')}><a href="#">Home</a></li>
        <li><a href="#">Course</a>
          <ul className={courseDropdown ? 'dropdown-visible' : ''}>
            <li><a href="#">Select Department</a>
              <ul className={selectCourseDropdown ? 'dropdown-visible' : ''}>
                <li id='sub' ><a href="#">Computer Science</a></li>
                <li id='sub' ><Link to='/InformationTechnology'>InformationTech</Link></li>
                <li id='sub' ><a href="#">Mechanical Engineering</a></li>
                <li id='sub' ><a href="#">Mechatronics Engineering</a></li>
              </ul>
            </li>
            <li><a href="#">All Course</a></li>
            <li><a href="#">Others</a></li>
          </ul>
        </li>
        <li onClick={()=>navigate('/admission')}><a href="#">Admission</a></li>
        <li onClick={()=>navigate('/contact')}><a href="#">Contact</a></li>
        <li onClick={()=>navigate('/about')}><a href="#">About</a></li>
        <li onClick={()=>navigate('/LoginPage')}><a href="#">LogOut</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
