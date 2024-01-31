// StudentAdmissionForm.js
import React, { useState } from 'react';
import "./Admission.css";
import Navbar from './Navbar';

const StudentAdmissionForm = () => {
  const [studentData, setStudentData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    aadharNo: '',
    course: '',
    department: '',
    studentPhone: '',
    parentPhone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the submission logic here, for example, send the data to a backend API
    console.log('Student Data:', studentData);
    // Reset the form after submission
    setStudentData({
      firstName: '',
      lastName: '',
      email: '',
      aadharNo: '',
      course: '',
      department: '',
      studentPhone: '',
      parentPhone: '',
    });
  };

  return (
    <>
    <Navbar/>
    <div className='ad'>
    <div id="student-form-container">
      <h2>Student Admission Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:<br/>
          <input
            type="text"
            name="firstName"
            value={studentData.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Last Name:<br/>
          <input
            type="text"
            name="lastName"
            value={studentData.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email ID:<br/>
          <input
            type="email"
            name="email"
            value={studentData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Aadhar Number:<br/>
          <input
            type="text"
            name="aadharNo"
            value={studentData.aadharNo}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Course:<br/>
          <input
            type="text"
            name="course"
            value={studentData.course}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Department:<br/>
          <input
            type="text"
            name="department"
            value={studentData.department}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Student Phone Number:<br/>
          <input
            type="tel"
            name="studentPhone"
            value={studentData.studentPhone}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Parent Phone Number:<br/>
          <input
            type="tel"
            name="parentPhone"
            value={studentData.parentPhone}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
    </>
  );
};

export default StudentAdmissionForm;
