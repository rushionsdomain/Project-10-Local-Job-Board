// Landing.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1>Welcome to Net-Work</h1>
        <p>Your local platform to connect businesses and job seekers</p>
        <div className="auth-buttons">
          <Link to="/login" className="btn-login">
            Sign In
          </Link>
          <Link to="/signup" className="btn-signup">
            Join Now
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Landing;
