import React from "react";
import { Link, Outlet } from "react-router-dom";

const JobSeekerDashboard = ({ onSignOut }) => {
  return (
    <div>
      <h2>Job Seeker Dashboard</h2>
      <nav>
        <Link to="job-listing">View Job Listings</Link> |{" "}
        <button onClick={onSignOut}>Sign Out</button>
      </nav>
      <Outlet />
    </div>
  );
};

export default JobSeekerDashboard;
