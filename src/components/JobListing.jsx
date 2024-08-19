// JobListing.jsx
import React, { useEffect, useState } from "react";
import "./JobListing.css";

const JobListing = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Simulate fetching data from db.json or API
    const fetchJobs = async () => {
      try {
        // Replace with your actual API endpoint or local data
        const response = await fetch("http://localhost:5000/jobs"); // Adjust the path accordingly
        const data = await response.json();
        setJobs(data.jobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  if (!jobs) {
    return <div>Loading...</div>;
  }

  return (
    <div className="job-listing">
      <h2>Job Listings</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id} className="job-item">
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <p>{job.description}</p>
            <p>
              <strong>Requirements:</strong> {job.requirements}
            </p>
            <p>
              <strong>Posted Date:</strong> {job.postedDate}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobListing;
