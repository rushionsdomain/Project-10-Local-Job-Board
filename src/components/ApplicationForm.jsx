import React, { useState } from "react";
import "./ApplicationForm.css";

// Example list of jobs
const jobList = [
  { id: 1, title: "Front-End Developer", company: "Tech Innovators" },
  { id: 2, title: "Back-End Developer", company: "CodeMasters" },
  { id: 3, title: "UI/UX Designer", company: "Creative Solutions" },
  { id: 4, title: "Data Scientist", company: "Data Insights" },
  { id: 5, title: "Product Manager", company: "Visionary Corp" },
];

const ApplicationForm = () => {
  const [selectedJob, setSelectedJob] = useState("");
  const [resume, setResume] = useState("");
  const [coverLetter, setCoverLetter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Selected Job:", selectedJob);
    console.log("Resume:", resume);
    console.log("Cover Letter:", coverLetter);
    // You might want to send this data to the server here
  };

  return (
    <div className="application-form">
      <h2>Apply for Job</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="job">Select Job:</label>
          <select
            id="job"
            value={selectedJob}
            onChange={(e) => setSelectedJob(e.target.value)}
            required
          >
            <option value="" disabled>
              Select a job
            </option>
            {jobList.map((job) => (
              <option key={job.id} value={job.title}>
                {job.title} at {job.company}
              </option>
            ))}
          </select>
        </div>
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
