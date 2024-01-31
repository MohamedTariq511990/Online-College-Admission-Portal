import React, { useState } from 'react';
import './Register.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Implement registration logic here, e.g., make an API call to the backend

    const userData = {
      firstName,
      lastName,
      email,
      password,
    };

    // Make an API call to your backend to handle registration
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log('Registration successful!');
        // Redirect to the dashboard or another page upon successful registration
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error.message);
    }
  };

  return (
    <div id ='reg'className="back">
    <div id ='reg'className="register-container">
      <form id ='reg'onSubmit={(e) => handleSubmit(e)}>
        <h1 id ='reg'>Registration</h1>
        <label id ='reg'>
          First Name:
          <input id='reg'
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>

        <label id ='reg'>
          Last Name:
          <input id='reg'
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>

        <label id ='reg'>
          Email Id:
          <input id='reg'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label id='reg'>
          Password:
          <input id='reg'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <center><button id ='reg' type="submit">Register</button></center>
       
      </form>
      <p id ='reg'>
          Already have an account? <Link to="/" style={{ color: '#ff0000' }}>Login Now</Link>
        </p>

    </div>
    
    </div>
  );
};

export default RegisterPage;
