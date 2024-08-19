import React, { useState, useEffect } from "react";

const ApplicationHistory = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    // Simulate fetching data

    fetch("http://localhost:5000/applications")
      .then((response) => response.json())
      .then((data) => setApplications(data))
      .catch((error) => console.error("Error fetching applications:", error));
  }, []);

  return (
    <div>
      <h2>Application History</h2>
      <ul>
        {applications.map((application) => (
          <li key={application.id}>
            {application.jobTitle} - {application.companyName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApplicationHistory;
