import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/job-listings">Job Listings</Link>
            </li>
            <li>
              <Link to="/apply">Apply for a Job</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/application-history">Application History</Link>
            </li>
            <li>
              <Link to="/job-recommendations">Job Recommendations</Link>
            </li>
            <li>
              <Link to="/" onClick={() => localStorage.removeItem("userRole")}>
                Logout
              </Link>
            </li>
          </ul>
        </nav>
        <h1>Welcome to JobSeek</h1>
        <p>
          Find your next job, connect with employers, and advance your career.
        </p>
      </header>
      <section className="home-content">
        <div className="section featured-jobs">
          <h2>Featured Jobs</h2>
          {/* Display featured jobs here */}
          {/* You might fetch and list featured jobs from an API */}
        </div>
        <div className="section featured-employers">
          <h2>Featured Employers</h2>
          {/* Display featured employers here */}
          {/* You might fetch and list featured employers from an API */}
        </div>
        <div className="section updates">
          <h2>Updates</h2>
          {/* Display relevant updates here */}
          {/* You might fetch and list updates from an API */}
        </div>
      </section>
    </div>
  );
};

export default Home;
