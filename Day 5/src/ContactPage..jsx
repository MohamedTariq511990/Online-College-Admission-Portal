// ContactPage.js
import React from 'react';
import './ContactPage.css';
import Navbar from './Navbar';
const ContactPage = () => {
  return (
    
        <>
        <Navbar></Navbar>
        <center>
        <div id='con'>
      <h2>Contact Us</h2>
      <p>
        If you have any questions or need assistance, feel free to contact us.
      </p>

      <div>
        <h3>Contact Information</h3>
        <p>Email: info@examplecollege.com</p>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Address: 123 College Street, Cityville, State, Country</p>
      </div>

      <div id='con'>
        <h3>Feedback Form</h3>
        <form>
          <label id='con'>
            Name:
            <input id='con'type="text" name="name" required />
          </label>
          <br />
          <label id='con'>
            Email:
            <input id='con'type="email" name="email" required />
          </label>
          <br />
          <label id='con'>
            Message:
            <textarea id='con' name="message" rows="4" required></textarea>
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
        </div>
      </div>
      </center>
      </>
    
  );
};

export default ContactPage;
