import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import logo from "../assets/network.jpeg";

function LandingPage() {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <img src={logo} alt="Net-Work Logo" className="landing-logo" />
        <nav>
          <Link to="/signin" className="landing-link">
            Sign In
          </Link>
          <Link to="/signup" className="landing-link">
            Sign Up
          </Link>
        </nav>
      </header>

      <div className="landing-content">
        <div className="landing-text">
          <h1>Connect with Local Jobs and Employers</h1>
          <p>
            Find your next opportunity or the perfect candidate within your
            community. Join Net-Work today and simplify your hiring or job
            search experience.
          </p>
          <Link to="/signup" className="landing-cta-button">
            Get Started
          </Link>
        </div>
        {/* <div className="landing-image">
          <img src={landingImage} alt="Job connections" />
        </div> */}
      </div>

      <footer className="landing-footer">
        <p>© 2024 Net-Work | Your Local Job Board Platform</p>
      </footer>
    </div>
  );
}

export default LandingPage;
