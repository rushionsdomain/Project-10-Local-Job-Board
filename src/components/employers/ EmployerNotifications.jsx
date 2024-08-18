import React from "react";
import "./EmployerNotifications.css";

const EmployerNotifications = () => {
  return (
    <div className="notifications-container">
      <div className="notification-item">
        <p>
          New application received from John Doe for Software Engineer position.
        </p>
        <span>2 hours ago</span>
      </div>
      <div className="notification-item">
        <p>Interview scheduled with Jane Smith.</p>
        <span>1 day ago</span>
      </div>
    </div>
  );
};

export default EmployerNotifications;
