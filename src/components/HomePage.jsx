// HomePage.jsx
import React from "react";
import Navbar from "./Navbar";
import "./HomePage.css";
import JobItem from "./JobItem";

const HomePage = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="feed">
        <h2>Job Opportunities</h2>
        <div className="job-list">
          <JobItem
            title="Software Engineer"
            company="TechCorp"
            location="Nairobi"
          />
          <JobItem
            title="Data Analyst"
            company="DataWorks"
            location="Mombasa"
          />
          <JobItem
            title="Marketing Manager"
            company="BrandBoost"
            location="Kisumu"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
