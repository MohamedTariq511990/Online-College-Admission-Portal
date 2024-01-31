// Import necessary libraries
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

// AdminLogin component
const AdminLogin = () => {
  // State to manage form inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // State to track login success
  const [loginSuccess, setLoginSuccess] = useState(false);

  // React Router navigate hook
  const navigate = useNavigate();

  // Function to handle form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // You should perform your actual login logic here
    // For simplicity, let's assume the login is successful if the username and password are both "admin"
    if (username === 'admin' && password === 'admin') {
      setLoginSuccess(true);
      // Navigate to admin home page
      navigate('/adminhome');
    } else {
      setLoginSuccess(false);
    }
  };

  return (
    <div className='al1'>
      <h2 id='al'>Admin Login</h2>
      <center>
      <form id='al' onSubmit={handleLogin}>
        <label id='al'>
          Username:<br/>
          <input id='al' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label id='al'>
          Password:<br/>
          <input id='al' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button id='al' type="submit" onClick={()=>navigate('/adminhome')}>Login</button>
      </form>

      {loginSuccess && <p>Login successful! Redirecting...</p>}
      {!loginSuccess && loginSuccess !== null && <p id='al'>Login failed. Please try again.</p>}
      </center>
    </div>
  );
};

export default AdminLogin;
