import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ role }) => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/messaging">Messaging</Link>
        </li>
        {role === "job-seeker" && (
          <>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/notifications">Notifications</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </>
        )}
        {role === "employer" && (
          <>
            <li>
              <Link to="/post-jobs">Post Jobs</Link>
            </li>
            <li>
              <Link to="/notifications">Notifications</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </>
        )}
        {role === "superuser" && (
          <>
            <li>
              <Link to="/admin">Administration</Link>
            </li>
            <li>
              <Link to="/notifications">Notifications</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
