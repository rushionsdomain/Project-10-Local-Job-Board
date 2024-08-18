import React, { useState } from "react";
import "./Messages.css";

const Messages = () => {
  const [messages] = useState([
    {
      id: 1,
      sender: "Employer1",
      content: "Are you available for an interview?",
    },
    { id: 2, sender: "Employer2", content: "We received your application." },
  ]);

  return (
    <div className="messages">
      <h2>Messages</h2>
      {messages.map((msg) => (
        <div className="message" key={msg.id}>
          <h3>{msg.sender}</h3>
          <p>{msg.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Messages;
