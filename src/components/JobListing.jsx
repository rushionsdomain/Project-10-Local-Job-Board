import React from "react";
import "./JobListing.css";

const JobListing = () => {
  return (
    <div className="job-listing">
      <h2>Job Listings</h2>
      <div className="job-filter">
        <label htmlFor="filter">Filter by:</label>
        <select id="filter">
          <option value="all">All</option>
        </select>
      </div>
      {/* Job cards will be rendered here */}
      {/* Sample job card */}
      <div className="job-card">
        <h3>Job Title</h3>
        <p>Company Name</p>
        <p>Location</p>
        <p>Job Type</p>
      </div>
    </div>
  );
};
export default JobListing;
