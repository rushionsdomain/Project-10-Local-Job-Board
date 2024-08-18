// EmployerDashboard.js
import React from "react";
import "./Dashboard.css"; // For styling

function EmployerDashboard() {
  return (
    <div className="dashboard">
      <h1>Employer Dashboard</h1>
      <div className="dashboard-content">
        <div className="dashboard-card">
          <h2>Job Posting Management</h2>
          <p>Post new job openings and manage existing ones.</p>
          <button className="dashboard-button">Manage Job Postings</button>
        </div>
        <div className="dashboard-card">
          <h2>Application Review</h2>
          <p>Review and manage applications from potential candidates.</p>
          <button className="dashboard-button">Review Applications</button>
        </div>
      </div>
    </div>
  );
}

export default EmployerDashboard;
