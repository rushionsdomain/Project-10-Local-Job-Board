import React from "react";
import { Link } from "react-router-dom";
import "./SuperuserNavbar.css";

const SuperuserNavbar = () => {
  return (
    <nav className="superuser-navbar">
      <ul>
        <li>
          <Link to="/superuser-dashboard">Home</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
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
        <li>
          <button onClick={() => alert("Logged out!")}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default SuperuserNavbar;
