// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Net-Work</h1>
      <div className="navbar-links">
        <Link to="/home">Home</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/chat">Messages</Link>
      </div>
    </nav>
  );
};

export default Navbar;
