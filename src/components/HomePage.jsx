import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <div className="logo">Local Job Board</div>
        <nav className="nav">
          <a href="#jobs">Jobs</a>
          <a href="#employers">Employers</a>
          <a href="#profile">Profile</a>
          <a href="#login">Sign In</a>
        </nav>
      </header>

      <section className="hero">
        <h1>Find Your Dream Job Locally</h1>
        <p>Connecting local businesses and job seekers efficiently.</p>
        <input
          type="text"
          placeholder="Search jobs..."
          className="search-bar"
        />
      </section>

      <section className="featured-jobs">
        <h2>Featured Jobs</h2>
        <div className="job-list">
          <div className="job-card">
            <h3>Software Developer</h3>
            <p>XYZ Tech Company</p>
            <button>Apply Now</button>
          </div>
          <div className="job-card">
            <h3>Marketing Specialist</h3>
            <p>ABC Marketing</p>
            <button>Apply Now</button>
          </div>
          {/* Add more job cards as needed */}
        </div>
      </section>

      <section className="featured-employers">
        <h2>Featured Employers</h2>
        <div className="employer-list">
          <div className="employer-card">
            <h3>XYZ Tech Company</h3>
            <p>Innovative tech solutions.</p>
          </div>
          <div className="employer-card">
            <h3>ABC Marketing</h3>
            <p>Creative marketing strategies.</p>
          </div>
          {/* Add more employer cards as needed */}
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 Local Job Board. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
