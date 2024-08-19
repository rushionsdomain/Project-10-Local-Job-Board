// LandingPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to Net-Work</h1>
      <p>Connecting job seekers with local opportunities.</p>

      {/* Navigation buttons */}
      <div className="auth-buttons">
        <Link to="/signin">
          <button className="auth-btn">Sign In</button>
        </Link>
        <Link to="/signup">
          <button className="auth-btn">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
