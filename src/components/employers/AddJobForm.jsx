import React, { useState } from "react";
import "./AddJobForm.css";

const AddJobForm = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Job Title:", jobTitle);
    console.log("Job Description:", jobDescription);
  };

  return (
    <div className="job-form-container">
      <div className="job-form-header">
        <h2>Add New Job</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="job-form-group">
          <label htmlFor="jobTitle">Job Title</label>
          <input
            type="text"
            id="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>
        <div className="job-form-group">
          <label htmlFor="jobDescription">Job Description</label>
          <textarea
            id="jobDescription"
            rows="5"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          />
        </div>
        <div className="job-form-actions">
          <button type="submit">Post Job</button>
        </div>
      </form>
    </div>
  );
};

export default AddJobForm;
