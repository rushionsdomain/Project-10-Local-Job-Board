import React from "react";
import "./Notifications.css";

const Notifications = () => {
  const notifications = [
    { id: 1, content: "Job application status updated: Interview" },
    { id: 2, content: "New job listing available: Frontend Developer" },
  ];

  return (
    <div className="notifications">
      <h2>Notifications</h2>
      {notifications.map((notification) => (
        <div className="notification" key={notification.id}>
          <p>{notification.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
