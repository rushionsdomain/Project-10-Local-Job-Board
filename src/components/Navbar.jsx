import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ userType }) => {
  return (
    <nav className="navbar">
      <h1>JobPortal</h1>
      <ul>
        {userType === "jobseeker" && (
          <>
            <li>
              <Link to="/feed">Feed</Link>
            </li>
            <li>
              <Link to="/messages">Messages</Link>
            </li>
            <li>
              <Link to="/notifications">Notifications</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </>
        )}
        {userType === "employer" && (
          <>
            <li>
              <Link to="/employer-feed">Feed</Link>
            </li>
            <li>
              <Link to="/post-job">Post Job</Link>
            </li>
            <li>
              <Link to="/messages">Messages</Link>
            </li>
            <li>
              <Link to="/notifications">Notifications</Link>
            </li>
            <li>
              <Link to="/employer-profile">Profile</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
