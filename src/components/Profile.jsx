// Profile.jsx
import React from "react";
import Navbar from "./Navbar";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <Navbar />
      <div className="profile">
        <h2>Your Profile</h2>
        <div className="profile-info">
          <p>
            <strong>Name:</strong> Francis Chegge
          </p>
          <p>
            <strong>Email:</strong> francis@example.com
          </p>
          <p>
            <strong>Location:</strong> Nairobi
          </p>
        </div>
        <button className="edit-button">Edit Profile</button>
      </div>
    </div>
  );
};

export default Profile;
