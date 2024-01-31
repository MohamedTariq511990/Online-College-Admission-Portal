import React, { useState } from 'react';
import './LoginPage.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const LoginPage = () => {
   const navigate= useNavigate();
  const [emailid, setEmailId] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailIdChange = (event) => {
    setEmailId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your authentication logic here
    console.log('EmailId:',emailid);
    console.log('Password:', password);
    navigate('/home');
    // You can implement authentication logic using an API call or other methods
  };

  return (
    <div className="cover">
      
    <div className='container'>
      <h1>LOGIN </h1>
      <br/>
      <form onSubmit={handleSubmit}>
        <label>
          Email Id:
          <br/>
          <input type="text" value={emailid} onChange={handleEmailIdChange} />
          </label>
        <br/>
        <label>
          Password:
          <br/>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <center>
        <button className='log' type="submit">Log In</button>
        
        <button onClick={()=>navigate('/register')}>Register</button>
        
        </center>
      </form>   
    </div> 
    </div>
  );
};

export default LoginPage;
