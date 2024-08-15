import React from "react";
import "./ChatWindow.css";

function ChatWindow() {
  return (
    <div className="chat-window">
      <h2>Messages</h2>
      <div className="message-list">
        <div className="message-item">
          <strong>Contact Name</strong>
          <p>Last message...</p>
          <small>2 hours ago</small>
        </div>
        {/* More messages */}
      </div>
      <div className="message-form">
        <input
          type="text"
          className="message-input"
          placeholder="Type a message..."
        />
        <button className="send-button">Send</button>
      </div>
    </div>
  );
}

export default ChatWindow;
