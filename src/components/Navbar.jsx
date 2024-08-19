import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ role }) => {
  return (
    <nav className="navbar">
      <Link to="/home">Home</Link>
      {role === "jobseeker" && (
        <>
          <Link to="/jobs">Jobs</Link>
          <Link to="/applications">Applications</Link>
          <Link to="/profile">Profile</Link>
        </>
      )}
      {role === "employer" && (
        <>
          <Link to="/post-job">Post Job</Link>
          <Link to="/view-applications">View Applications</Link>
          <Link to="/profile">Profile</Link>
        </>
      )}
      {role === "superuser" && (
        <>
          <Link to="/admin">Admin</Link>
          <Link to="/profile">Profile</Link>
        </>
      )}
      <Link to="/logout">Logout</Link>
    </nav>
  );
};

export default Navbar;
