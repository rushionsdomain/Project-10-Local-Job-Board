import React, { useState, useEffect } from "react";
import "./Profile.css";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    resume: "",
  });

  useEffect(() => {
    // Fetch profile data from the server or local storage
    fetch("http://localhost:5000/profile")
      .then((response) => response.json())
      .then((data) => setProfileData(data))
      .catch((error) => console.error("Error fetching profile data:", error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handleSave = () => {
    // Save updated profile data
    console.log("Updated Profile:", profileData);
    // You might want to send this data to the server here
  };

  return (
    <div className="profile">
      <h2>Profile</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={profileData.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={profileData.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="resume">Resume:</label>
        <input
          type="text"
          id="resume"
          name="resume"
          value={profileData.resume}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleSave}>Save Changes</button>
    </div>
  );
};

export default Profile;
