import React from "react";
import "./MessageList.css";

function MessageList({ messages }) {
  return (
    <div className="message-list">
      {messages.map((msg, index) => (
        <div key={index} className="message-item">
          <strong>{msg.sender}:</strong> {msg.content}
          <br />
          <small>{new Date(msg.timestamp).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
}

export default MessageList;
