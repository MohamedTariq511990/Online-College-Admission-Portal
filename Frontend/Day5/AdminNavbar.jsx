// Navbar.jsx

import React, { useState } from 'react';
import './Navbar.css';
import {  useNavigate } from 'react-router-dom'; 

const AdminNavbar = () => {
  const navigate= useNavigate();
  
  return (
    <nav className="navbar">
      <ul>
        <li onClick={()=>navigate('/adminhome')}><a href="#">Home</a></li>
        <li onClick={()=>navigate('/course')}><a href="#">Course</a>

           
        </li>
        <li onClick={()=>navigate('/admission')}><a href="#">Admission</a></li>
        <li onClick={()=>navigate('/contact')}><a href="#">Contact</a></li>
        <li onClick={()=>navigate('/about')}><a href="#">About</a></li>
      </ul> 
    </nav>
  );
};

export default AdminNavbar;
