import React from "react";

const JobItem = ({ job, onClick }) => {
  return (
    <div className="job-item" onClick={() => onClick(job)}>
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      <p>{job.location}</p>
    </div>
  );
};

export default JobItem;
