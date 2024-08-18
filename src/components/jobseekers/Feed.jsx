import React, { useState, useEffect } from "react";
import "./Feed.css";

const Feed = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("/jobs")
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  return (
    <div className="feed">
      <h2>Job Feed</h2>
      {jobs.map((job) => (
        <div className="job-card" key={job.id}>
          <h3>{job.title}</h3>
          <p>{job.description}</p>
          <button>Apply</button>
        </div>
      ))}
    </div>
  );
};

export default Feed;
