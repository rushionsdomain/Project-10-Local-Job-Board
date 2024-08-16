import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterForm.css";
import signupImage from "../assets/lock.jpg"; // Import an image for the left side

function SignUpForm() {
  const [role, setRole] = useState("job-seeker"); // default role
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (role === "job-seeker") {
      navigate("/jobseeker-dashboard");
    } else if (role === "employer") {
      navigate("/employer-dashboard");
    }
  };

  return (
    <div className="register-container">
      <div className="register-left">
        <img src={signupImage} alt="Sign Up" className="register-image" />
      </div>

      <div className="register-right">
        <h2>Create Your Account</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />

          <div className="role-selection">
            <label className="job-seeker-role">
              <input
                type="radio"
                name="role"
                value="job-seeker"
                checked={role === "job-seeker"}
                onChange={() => setRole("job-seeker")}
              />
              Job Seeker
            </label>
            <label className="employer-role">
              <input
                type="radio"
                name="role"
                value="employer"
                checked={role === "employer"}
                onChange={() => setRole("employer")}
              />
              Employer
            </label>
          </div>

          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>

        <div className="register-footer">
          Already have an account? <a href="/login">Sign In</a>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
