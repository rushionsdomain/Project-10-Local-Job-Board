import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ApplicationForm.css";

const ApplicationForm = ({ jobId }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to API or server
    fetch("/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then(() => {
      navigate("/job-seeker-dashboard");
    });
  };

  return (
    <div className="application-form">
      <h2>Apply for Job {jobId}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="resume">Resume:</label>
          <input
            type="file"
            id="resume"
            name="resume"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ApplicationForm;
