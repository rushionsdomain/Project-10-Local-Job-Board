import React from "react";
import Navbar from "./Navbar";
import "./JobSeekerDashboard.css";

const JobSeekerDashboard = () => {
  return (
    <div className="dashboard-container">
      <Navbar role="job-seeker" />
      <div className="dashboard-content">
        <h2>Welcome, Job Seeker!</h2>
        <div className="dashboard-sections">
          <section>
            <h3>Profile Management</h3>
            <p>Edit your profile, resume, and cover letters.</p>
          </section>
          <section>
            <h3>Job Search</h3>
            <p>Browse job listings and set alerts for new openings.</p>
          </section>
          <section>
            <h3>Application Management</h3>
            <p>Track your job applications and manage interviews.</p>
          </section>
          <section>
            <h3>Networking</h3>
            <p>Connect with employers and join professional groups.</p>
          </section>
          <section>
            <h3>Interview Preparation</h3>
            <p>Access interview tips and schedule mock sessions.</p>
          </section>
          <section>
            <h3>Job Suggestions</h3>
            <p>Get personalized job recommendations.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default JobSeekerDashboard;
