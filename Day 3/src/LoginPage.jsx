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
    <div id='lp'className="cover">
      
    <div id='lp' className='container'>
      <h1 id='lp'>LOGIN </h1>
      <br/>
      <form id='lp' onSubmit={handleSubmit}>
        <label id='lp'>
          Email Id:
          <br/>
          <input id='lp' type="text" value={emailid} onChange={handleEmailIdChange} />
          </label>
        <br/>
        <label>
          Password:
          <br/>
          <input id='lp' type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <center>
        <button id='but' className='log' type="submit">Log In</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
        <button id='but' onClick={()=>navigate('/register')}>Register</button><br/>
        <button id='but1' onClick={()=>navigate('/AdminLogin')}>Admin </button>
       
        
        </center>
      </form>   
    </div> 
    </div>
  );
};

export default LoginPage;
