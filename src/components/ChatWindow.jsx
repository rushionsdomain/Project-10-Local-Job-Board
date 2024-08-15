import React, { useState } from "react";
import MessageForm from "./MessageForm";
import MessageList from "./MessageList";
import "./ChatWindow.css";

function ChatWindow() {
  const [messages, setMessages] = useState([
    {
      sender: "Employer",
      content: "Hello! We received your application.",
      timestamp: "2024-08-13T12:00:00Z",
    },
    {
      sender: "Job Seeker",
      content: "Thank you! Looking forward to hearing from you.",
      timestamp: "2024-08-13T12:05:00Z",
    },
  ]);

  const handleSendMessage = (newMessageContent) => {
    const newMessage = {
      sender: "Job Seeker", // Replace this with dynamic sender data
      content: newMessageContent,
      timestamp: new Date().toISOString(),
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="chat-window">
      <MessageList messages={messages} />
      <MessageForm onSendMessage={handleSendMessage} />
    </div>
  );
}

export default ChatWindow;
