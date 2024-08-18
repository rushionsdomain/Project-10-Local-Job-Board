import React from "react";
import { Link } from "react-router-dom";
import "./JobSeekerNavbar.css";

const JobSeekerNavbar = () => {
  return (
    <nav className="jobseeker-navbar">
      <ul>
        <li>
          <Link to="/job-seeker-dashboard">Home</Link>
        </li>
        <li>
          <Link to="/job-listing">Job Listings</Link>
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
          <button onClick={() => (window.location.href = "/")}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default JobSeekerNavbar;
