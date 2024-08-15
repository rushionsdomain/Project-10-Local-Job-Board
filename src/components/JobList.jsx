// JobList.jsx
import React from "react";
import Navbar from "./Navbar";
import JobItem from "./JobItem";
import "./JobList.css";

const JobList = () => {
  return (
    <div className="job-list-container">
      <Navbar />
      <div className="job-list">
        <h2>Available Jobs</h2>
        <JobItem
          title="Product Manager"
          company="InnovateTech"
          location="Nakuru"
        />
        <JobItem
          title="UX Designer"
          company="CreativeMinds"
          location="Nairobi"
        />
        <JobItem
          title="HR Specialist"
          company="HR Solutions"
          location="Thika"
        />
      </div>
    </div>
  );
};

export default JobList;
