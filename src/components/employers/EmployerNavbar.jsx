// EmployerNavbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./EmployerNavbar.css";

const EmployerNavbar = () => {
  return (
    <nav className="employer-navbar">
      <ul>
        <li>
          <Link to="/employer-dashboard">Home</Link>
        </li>
        <li>
          <Link to="/add-job">Post Job</Link>
        </li>
        <li>
          <Link to="/view-applications">View Applications</Link>
        </li>
        <li>
          <Link to="/messages">Messages</Link>
        </li>
        <li>
          <Link to="/notifications">Notifications</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <button onClick={() => alert("Logged out!")}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default EmployerNavbar;
