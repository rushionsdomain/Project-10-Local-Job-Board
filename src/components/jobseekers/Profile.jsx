import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile">
      <h2>My Profile</h2>
      <div className="profile-info">
        <h3>Name: John Doe</h3>
        <p>Email: johndoe@example.com</p>
        <p>Skills: React, Node.js, CSS</p>
      </div>
      <div className="profile-actions">
        <button>Edit Profile</button>
      </div>
    </div>
  );
};

export default Profile;