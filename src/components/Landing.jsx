import React from "react";
import "./Landing.css";

function Landing() {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>Welcome to Net-Work</h1>
        <p>
          Connect with professionals, explore job opportunities, and grow your
          network.
        </p>
        <div className="landing-buttons">
          <a href="/signup" className="signup-button">
            Join Now
          </a>
          <a href="/login" className="login-button">
            Sign In
          </a>
        </div>
      </header>
    </div>
  );
}

export default Landing;
