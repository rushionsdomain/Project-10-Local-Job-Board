// JobItem.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./JobItem.css";

const JobItem = ({ title, company, location }) => {
  return (
    <div className="job-item">
      <h3>{title}</h3>
      <p>{company}</p>
      <p>{location}</p>
      <Link to={`/jobs/${title}`} className="job-link">
        View Details
      </Link>
    </div>
  );
};

export default JobItem;
