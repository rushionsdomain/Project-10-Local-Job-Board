import React, { useState } from "react";
import JobItem from "./JobItem";

const JobList = ({ jobs, onJobSelect }) => {
  const [filter, setFilter] = useState("");

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(filter.toLowerCase()) ||
      job.company.toLowerCase().includes(filter.toLowerCase()) ||
      job.location.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="job-list">
      <input
        type="text"
        placeholder="Filter jobs by title, company, or location..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="job-filter-input"
      />
      {filteredJobs.map((job) => (
        <JobItem key={job.id} job={job} onClick={onJobSelect} />
      ))}
    </div>
  );
};

export default JobList;
