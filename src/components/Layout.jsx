// Layout.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/job-listings">Job Listings</Link>
          </li>
          <li>
            <Link to="/apply/:jobId">Apply for Job</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
