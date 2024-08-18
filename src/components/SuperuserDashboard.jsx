// SuperuserDashboard.js
import React from "react";
import "./Dashboard.css"; // For styling

function SuperuserDashboard() {
  return (
    <div className="dashboard">
      <h1>Superuser Dashboard</h1>
      <div className="dashboard-content">
        <div className="dashboard-card">
          <h2>Site Administration</h2>
          <p>Manage site settings and user roles.</p>
          <button className="dashboard-button">Go to Administration</button>
        </div>
        <div className="dashboard-card">
          <h2>Site Analytics</h2>
          <p>View site analytics and performance metrics.</p>
          <button className="dashboard-button">View Analytics</button>
        </div>
      </div>
    </div>
  );
}

export default SuperuserDashboard;
