import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-header">
        <img className="profile-pic" src="profile-pic-url" alt="Profile" />
        <h2>User Name</h2>
        <p>Professional Title</p>
      </div>
      <div className="profile-content">
        <section className="profile-summary">
          <h3>Summary</h3>
          <p>Brief description about the user...</p>
        </section>
        <section className="profile-experience">
          <h3>Experience</h3>
          <ul>
            <li>Job 1 - Company</li>
            <li>Job 2 - Company</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Profile;
