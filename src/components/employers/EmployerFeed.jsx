import React from "react";
import "./EmployerFeed.css";

const EmployerFeed = () => {
  return (
    <div className="feed-container">
      <div className="feed-item">
        <h3>New Job Postings</h3>
        <p>Check out the latest job postings in your area.</p>
      </div>
      <div className="feed-item">
        <h3>Interview Tips</h3>
        <p>Prepare for your interviews with these helpful tips.</p>
      </div>
    </div>
  );
};

export default EmployerFeed;
