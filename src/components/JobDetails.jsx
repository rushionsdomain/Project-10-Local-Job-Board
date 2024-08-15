// JobDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import "./JobDetails.css";

const JobDetails = () => {
  const { id } = useParams(); // Use job ID for dynamic data later

  return (
    <div className="job-details-container">
      <Navbar />
      <div className="job-details">
        <h2>Job Title: {id}</h2>
        <p>
          <strong>Company:</strong> Example Company
        </p>
        <p>
          <strong>Location:</strong> Nairobi
        </p>
        <p>
          <strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nulla auctor lorem nec urna.
        </p>
        <button className="apply-button">Apply Now</button>
      </div>
    </div>
  );
};

export default JobDetails;
