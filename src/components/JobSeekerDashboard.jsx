// JobSeekerDashboard.js
import React from "react";
import "./Dashboard.css"; // For styling

function JobSeekerDashboard() {
  return (
    <div className="dashboard">
      <h1>Job Seeker Dashboard</h1>
      <div className="dashboard-content">
        <div className="dashboard-card">
          <h2>Profile Management</h2>
          <p>Manage your profile and update your personal details.</p>
          <button className="dashboard-button">Go to Profile</button>
        </div>
        <div className="dashboard-card">
          <h2>Job Search</h2>
          <p>Search for jobs that match your skills and experience.</p>
          <button className="dashboard-button">Search Jobs</button>
        </div>
      </div>
    </div>
  );
}

export default JobSeekerDashboard;
