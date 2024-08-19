import React, { useState, useEffect } from "react";
import "./ApplicationHistory.css";

const ApplicationHistory = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    // Fetch application history data from the server or local storage
    fetch("http://localhost:5000/applications")
      .then((response) => response.json())
      .then((data) => setApplications(data))
      .catch((error) => console.error("Error fetching applications:", error));
  }, []);

  return (
    <div className="application-history">
      <h2>Application History</h2>
      <div className="applications-list">
        {applications.length > 0 ? (
          applications.map((app) => (
            <div key={app.id} className="application-card">
              <h3>{app.jobTitle}</h3>
              <p>Company: {app.companyName}</p>
              <p>Status: {app.status}</p>
              <p>Date Applied: {app.dateApplied}</p>
            </div>
          ))
        ) : (
          <p>No applications found.</p>
        )}
      </div>
    </div>
  );
};

export default ApplicationHistory;
