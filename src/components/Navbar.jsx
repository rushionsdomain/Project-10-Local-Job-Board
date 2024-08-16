import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ role }) => {
  const navLinks = {
    "job-seeker": [
      { to: "/home", text: "Home" },
      { to: "/messaging", text: "Messaging" },
      { to: "/jobs", text: "Jobs" },
      { to: "/notifications", text: "Notifications" },
      { to: "/profile", text: "Profile" },
    ],
    employer: [
      { to: "/home", text: "Home" },
      { to: "/messaging", text: "Messaging" },
      { to: "/post-jobs", text: "Post Jobs" },
      { to: "/notifications", text: "Notifications" },
      { to: "/profile", text: "Profile" },
    ],
    superuser: [
      { to: "/home", text: "Home" },
      { to: "/messaging", text: "Messaging" },
      { to: "/administration", text: "Administration of Users" },
      { to: "/notifications", text: "Notifications" },
      { to: "/profile", text: "Profile" },
    ],
  };

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        {navLinks[role].map((link) => (
          <li key={link.to}>
            <Link to={link.to}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
