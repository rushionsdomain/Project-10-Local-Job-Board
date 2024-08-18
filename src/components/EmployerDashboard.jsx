// EmployerDashboard.js
import React, { useState } from "react";
import "./EmployerDashboard.css";

const EmployerDashboard = () => {
  const [company, setCompany] = useState({
    name: "TechCorp",
    logo: "logo.png",
    description: "Innovative solutions for a digital world",
    locations: ["New York", "San Francisco", "Remote"],
  });

  const [jobPosts, setJobPosts] = useState([
    { id: 1, title: "Senior Developer", applications: 5, status: "Open" },
    { id: 2, title: "Marketing Manager", applications: 3, status: "Open" },
  ]);

  const [applications] = useState([
    {
      id: 1,
      name: "Jane Doe",
      jobTitle: "Senior Developer",
      status: "Shortlisted",
    },
  ]);

  const handleEditCompanyProfile = () => {
    // Placeholder function to use setCompany
    setCompany((prevCompany) => ({ ...prevCompany }));
  };

  const handleEditJobPosting = (jobId) => {
    // Placeholder function to use setJobPosts
    setJobPosts((prevJobPosts) =>
      prevJobPosts.map((job) =>
        job.id === jobId ? { ...job, status: "Editing" } : job
      )
    );
  };

  return (
    <div className="employer-dashboard">
      <section className="profile-management">
        <h2>Profile Management</h2>
        <p>Company: {company.name}</p>
        <p>Locations: {company.locations.join(", ")}</p>
        <button onClick={handleEditCompanyProfile}>Edit Company Profile</button>
      </section>

      <section className="job-posting">
        <h2>Job Posting Management</h2>
        {jobPosts.map((job) => (
          <div key={job.id}>
            <p>
              {job.title} ({job.applications} applications)
            </p>
            <button onClick={() => handleEditJobPosting(job.id)}>
              Edit Job Posting
            </button>
          </div>
        ))}
      </section>

      <section className="application-review">
        <h2>Application Review</h2>
        {applications.map((app) => (
          <div key={app.id}>
            <p>
              {app.name} applied for {app.jobTitle}
            </p>
            <p>Status: {app.status}</p>
            <button>Shortlist</button>
          </div>
        ))}
      </section>

      <section className="interview-scheduling">
        <h2>Interview Scheduling</h2>
        <p>Schedule interviews with shortlisted candidates.</p>
      </section>

      <section className="analytics">
        <h2>Analytics and Reports</h2>
        <p>
          View job posting insights, application statuses, and recruitment
          trends.
        </p>
      </section>
    </div>
  );
};

export default EmployerDashboard;
