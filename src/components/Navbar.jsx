// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ role }) => {
  const links = {
    jobseeker: [
      { path: "/dashboard", label: "Home" },
      { path: "/messages", label: "Messaging" },
      { path: "/jobs", label: "Jobs" },
      { path: "/notifications", label: "Notifications" },
      { path: "/profile", label: "Profile" },
    ],
    employer: [
      { path: "/dashboard", label: "Home" },
      { path: "/messages", label: "Messaging" },
      { path: "/post-jobs", label: "Post Jobs" },
      { path: "/notifications", label: "Notifications" },
      { path: "/profile", label: "Profile" },
    ],
    superuser: [
      { path: "/dashboard", label: "Home" },
      { path: "/messages", label: "Messaging" },
      { path: "/admin", label: "Admin" },
      { path: "/notifications", label: "Notifications" },
      { path: "/profile", label: "Profile" },
    ],
  };

  return (
    <nav className="navbar">
      {links[role].map((link) => (
        <Link key={link.path} to={link.path}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
