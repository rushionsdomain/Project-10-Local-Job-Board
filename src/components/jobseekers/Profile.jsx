import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [profileData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    skills: "React, Node.js, CSS",
    profileImage: "/path/to/profile-image.jpg",
  });

  const handleProfileEdit = () => {
    // Implement profile editing functionality here
  };

  return (
    <div className="profile">
      <div className="profile-header">
        <img
          src={profileData.profileImage}
          alt="Profile"
          className="profile-image"
        />
        <h2>{profileData.name}</h2>
      </div>
      <div className="profile-info">
        <p>Email: {profileData.email}</p>
        <p>Skills: {profileData.skills}</p>
      </div>
      <div className="profile-actions">
        <button onClick={handleProfileEdit}>Edit Profile</button>
      </div>
    </div>
  );
};

export default Profile;
