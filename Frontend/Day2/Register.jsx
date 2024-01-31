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
    <div className="back">
    <div className="register-container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>Registration</h1>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>

        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>

        <label>
          Email Id:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <center><button type="submit">Register</button></center>
       
      </form>
      <p>
          Already have an account? <Link to="/" style={{ color: '#ff0000' }}>Login Now</Link>
        </p>

    </div>
    
    </div>
  );
};

export default RegisterPage;
