import React from "react";
import "./EmployerMessages.css";

const EmployerMessages = () => {
  return (
    <div className="messages-container">
      <div className="message-card">
        <h3>John Doe</h3>
        <p>Hello, I am interested in the Software Engineer position...</p>
        <span>2 days ago</span>
      </div>
      <div className="message-card">
        <h3>Jane Smith</h3>
        <p>Can we reschedule our interview for next week?</p>
        <span>5 days ago</span>
      </div>
    </div>
  );
};

export default EmployerMessages;
