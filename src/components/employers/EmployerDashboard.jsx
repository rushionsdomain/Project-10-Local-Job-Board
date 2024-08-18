import React from "react";
import { Link, Outlet } from "react-router-dom";

const EmployerDashboard = ({ onSignOut }) => {
  return (
    <div>
      <h2>Employer Dashboard</h2>
      <nav>
        <Link to="view-applications">View Applications</Link> |{" "}
        <Link to="add-job">Add Job</Link> |{" "}
        <button onClick={onSignOut}>Sign Out</button>
      </nav>
      <Outlet />
    </div>
  );
};

export default EmployerDashboard;
