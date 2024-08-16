import React from "react";
import Navbar from "./Navbar";
import "./SuperuserDashboard.css";

const SuperuserDashboard = () => {
  return (
    <div className="dashboard-container">
      <Navbar role="superuser" />
      <div className="dashboard-content">
        <h2>Welcome, Superuser!</h2>
        <div className="dashboard-sections">
          <section>
            <h3>Site Administration</h3>
            <p>Manage user roles and approve registrations.</p>
          </section>
          <section>
            <h3>Content Management</h3>
            <p>Edit site-wide content and moderate forums.</p>
          </section>
          <section>
            <h3>Site Analytics</h3>
            <p>View site performance and user engagement metrics.</p>
          </section>
          <section>
            <h3>Security and Compliance</h3>
            <p>Monitor security logs and ensure compliance.</p>
          </section>
          <section>
            <h3>Feedback and Support</h3>
            <p>Review user feedback and respond to support tickets.</p>
          </section>
          <section>
            <h3>Customization and Settings</h3>
            <p>Adjust site settings and manage notifications.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SuperuserDashboard;
