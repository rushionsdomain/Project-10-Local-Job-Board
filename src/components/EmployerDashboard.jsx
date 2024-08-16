import React from "react";
import Navbar from "./Navbar";
import "./EmployerDashboard.css";

const EmployerDashboard = () => {
  return (
    <div className="dashboard-container">
      <Navbar role="employer" />
      <div className="dashboard-content">
        <h2>Welcome, Employer!</h2>
        <div className="dashboard-sections">
          <section>
            <h3>Profile Management</h3>
            <p>Edit company details and manage locations.</p>
          </section>
          <section>
            <h3>Job Posting Management</h3>
            <p>Create and manage job postings.</p>
          </section>
          <section>
            <h3>Application Review</h3>
            <p>Review and shortlist job applications.</p>
          </section>
          <section>
            <h3>Interview Scheduling</h3>
            <p>Schedule interviews and manage timelines.</p>
          </section>
          <section>
            <h3>Talent Pool Management</h3>
            <p>Manage potential candidates for future roles.</p>
          </section>
          <section>
            <h3>Analytics and Reports</h3>
            <p>View insights and generate recruitment reports.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;
