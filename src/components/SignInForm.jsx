// SignInForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "./authService"; // Import authentication service
import "./SignInForm.css";

function SignInForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await login(username, password);
      if (user.role === "job-seeker") {
        navigate("/home");
      } else if (user.role === "employer") {
        navigate("/home");
      } else if (user.role === "superuser") {
        navigate("/home");
      }
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-left">
        <img
          src="/path/to/signin-image.jpg" // Update with the actual image path
          alt="Sign In"
          className="signin-image"
        />
      </div>
      <div className="signin-right">
        <h2>Sign In to Your Account</h2>
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
          <button type="submit" className="signin-button">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignInForm;
