import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import logo from "../assets/network.jpeg";
import animationData from "../assets/work.json"; // Add the JSON animation file
import Lottie from "lottie-react"; // Import Lottie React

function LandingPage() {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <img
          src={logo}
          alt="Net-Work Logo"
          className="landing-logo"
          onClick={() => window.location.reload()}
        />
        <nav>
          <Link to="/login" className="landing-cta-button">
            Sign In
          </Link>
          <Link to="/signup" className="landing-cta-button">
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
        <div className="landing-image">
          <Lottie animationData={animationData} style={{ height: 300 }} />
        </div>
      </div>

      <footer className="landing-footer">
        <p>© 2024 Net-Work</p>
      </footer>
    </div>
  );
}

export default LandingPage;
