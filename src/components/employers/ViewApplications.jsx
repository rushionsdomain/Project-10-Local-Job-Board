import React from "react";
import "./ViewApplications.css";

const ViewApplications = () => {
  return (
    <div className="applications-container">
      <div className="application-card">
        <h3>John Doe</h3>
        <p>Applied for: Software Engineer</p>
        <div className="applicant-details">
          <button>View Details</button>
        </div>
      </div>
      <div className="application-card">
        <h3>Jane Smith</h3>
        <p>Applied for: Product Manager</p>
        <div className="applicant-details">
          <button>View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ViewApplications;
