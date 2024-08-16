import React, { useState } from "react";
import "./ApplicationForm.css";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    coverLetter: "",
    resume: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission
    alert("Application Submitted!");
  };

  return (
    <div className="application-form">
      <h3>Apply for a Job</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="coverLetter"
          placeholder="Cover Letter"
          value={formData.coverLetter}
          onChange={handleChange}
          required
        />
        <input
          type="file"
          name="resume"
          onChange={(e) =>
            setFormData({ ...formData, resume: e.target.files[0] })
          }
          required
        />
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default ApplicationForm;
