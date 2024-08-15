import React from "react";

const JobDetails = ({ job }) => {
  if (!job)
    return <div className="job-details">Select a job to see details</div>;

  return (
    <div className="job-details">
      <h2>{job.title}</h2>
      <h4>{job.company}</h4>
      <p>{job.location}</p>
      <p>{job.description}</p>
      <button className="apply-button">Apply Now</button>
    </div>
  );
};

export default JobDetails;
