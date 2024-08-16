import React from "react";
import Navbar from "./Navbar";
import "./HomePage.css";
import JobItem from "./JobItem";
import ApplicationForm from "./ApplicationForm";
import AddJobForm from "./AddJobForm";

const HomePage = ({ role }) => {
  return (
    <div className="home-container">
      {/* Navbar is dynamic based on the role */}
      <Navbar role={role} />
      <div className="feed">
        {role === "job-seeker" && (
          <>
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
            <ApplicationForm />
          </>
        )}

        {role === "employer" && (
          <>
            <h2>Manage Your Job Postings</h2>
            <AddJobForm />
            <div className="job-list">
              <JobItem
                title="Posted: Senior Developer"
                company="YourCompany"
                location="Remote"
              />
            </div>
          </>
        )}

        {role === "superuser" && (
          <>
            <h2>Admin Dashboard</h2>
            <p>
              Welcome to the superuser dashboard where you can manage site-wide
              settings.
            </p>
            {/* Add functionalities like user administration, reports, etc. */}
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
