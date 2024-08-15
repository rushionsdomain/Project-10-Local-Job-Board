import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/home">Net-Work</Link>
      </div>
      <div className="navbar-links">
        <Link to="/home">Home</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/messaging">Messaging</Link>
      </div>
    </nav>
  );
}

export default Navbar;
