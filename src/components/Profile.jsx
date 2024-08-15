// src/components/Profile.jsx
import React from "react";

function Profile() {
  return (
    <div>
      <h2>User Profile</h2>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Profile;
