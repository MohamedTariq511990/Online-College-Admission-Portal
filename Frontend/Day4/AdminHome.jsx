import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import "./AdminHome.css";

const AdminHome = () => {
  const [admissionDetails, setAdmissionDetails] = useState([]);

  useEffect(() => {
    // Fetch admission details from the backend API
    const fetchAdmissionDetails = async () => {
      try {
        const response = await fetch('/api/admissionDetails');
        if (response.ok) {
          const data = await response.json();
          setAdmissionDetails(data);
        } else {
          console.error('Failed to fetch admission details');
        }
      } catch (error) {
        console.error('Error during fetch:', error.message);
      }
    };

    fetchAdmissionDetails();
  }, []);

  return (
    <>
    <Navbar/>
    <div>
      <h1>Admission Details</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Program</th>
            <th>Admission Date</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {admissionDetails.map((admission) => (
            <tr key={admission.id}>
              <td>{admission.id}</td>
              <td>{admission.firstName}</td>
              <td>{admission.lastName}</td>
              <td>{admission.email}</td>
              <td>{admission.program}</td>
              <td>{admission.admissionDate}</td>
              {/* Add more columns as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default AdminHome;
