// RegisterForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "./authService"; // Import authentication service
import "./RegisterForm.css";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("job-seeker");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(username, password, role);
      navigate("/login");
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <div className="register-container">
      <div className="register-left">
        <img
          src="/path/to/signup-image.jpg" // Update with the actual image path
          alt="Sign Up"
          className="register-image"
        />
      </div>
      <div className="register-right">
        <h2>Create Your Account</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="role-selection">
            <label>
              <input
                type="radio"
                name="role"
                value="job-seeker"
                checked={role === "job-seeker"}
                onChange={() => setRole("job-seeker")}
              />
              Job Seeker
            </label>
            <label>
              <input
                type="radio"
                name="role"
                value="employer"
                checked={role === "employer"}
                onChange={() => setRole("employer")}
              />
              Employer
            </label>
            <label>
              <input
                type="radio"
                name="role"
                value="superuser"
                checked={role === "superuser"}
                onChange={() => setRole("superuser")}
              />
              Superuser
            </label>
          </div>
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
