import React from "react";
import "./EmployerProfile.css";

const EmployerProfile = () => {
  return (
    <div className="employer-profile-container">
      <div className="profile-header">
        <img src="/path/to/logo.png" alt="Company Logo" />
        <h2>Company Name</h2>
      </div>
      <div className="profile-details">
        <h3>About Us</h3>
        <p>We are a leading company in the tech industry...</p>
        <h3>Location</h3>
        <p>123 Main St, City, State</p>
        <h3>Contact</h3>
        <p>Email: contact@company.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
    </div>
  );
};

export default EmployerProfile;
