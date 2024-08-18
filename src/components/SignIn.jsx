// SignIn.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css"; // Add your styles

const SignIn = ({ onLogin }) => {
  const [role, setRole] = useState(""); // Manage user role input
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Mock login logic
    if (username && password) {
      onLogin(role); // Set the role in the parent (App.js)

      // Redirect based on role
      if (role === "JobSeeker") {
        navigate("/jobseeker/dashboard");
      } else if (role === "Employer") {
        navigate("/employer/dashboard");
      } else if (role === "Superuser") {
        navigate("/superuser/dashboard");
      } else {
        alert("Please select a valid role");
      }
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="signin-page">
      <h2>Sign In</h2>
      <div className="form-group">
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Select Role:</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">Select Role</option>
          <option value="JobSeeker">Job Seeker</option>
          <option value="Employer">Employer</option>
          <option value="Superuser">Superuser</option>
        </select>
      </div>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default SignIn;
