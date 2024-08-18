import React from "react";
import "./JobSeekerDashboard.css";
import JobSeekerNavbar from "./JobSeekerNavbar";

const JobSeekerDashboard = ({ onSignOut }) => {
  return (
    <div>
      <JobSeekerNavbar />
      <div className="welcome-container">
        <h1>Welcome to Your Dashboard!</h1>
      </div>
    </div>
  );
};

export default JobSeekerDashboard;
