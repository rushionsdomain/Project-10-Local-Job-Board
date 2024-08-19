import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/job-listings">Job Listings</Link>
          </li>
          <li>
            <Link to="/apply">Apply for a Job</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/application-history">Application History</Link>
          </li>
          <li>
            <Link to="/job-recommendations">Job Recommendations</Link>
          </li>
          <li>
            <Link to="/" onClick={() => localStorage.removeItem("userRole")}>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
