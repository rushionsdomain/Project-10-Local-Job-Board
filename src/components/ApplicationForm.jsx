import React, { useState } from "react";
import "./ApplicationForm.css";

const ApplicationForm = () => {
  const [resume, setResume] = useState("");
  const [coverLetter, setCoverLetter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Resume:", resume);
    console.log("Cover Letter:", coverLetter);
    // You might want to send this data to the server here
  };

  return (
    <div className="application-form">
      <h2>Apply for Job</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="resume">Resume:</label>
          <input
            type="file"
            id="resume"
            accept=".pdf, .doc, .docx"
            onChange={(e) => setResume(e.target.files[0])}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="coverLetter">Cover Letter:</label>
          <textarea
            id="coverLetter"
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            rows="6"
            required
          ></textarea>
        </div>
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default ApplicationForm;
