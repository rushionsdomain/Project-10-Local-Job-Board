import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignInForm.css";
import signinImage from "../assets/lock.jpg"; // Import an image for the left side

function SignInForm() {
  const [role, setRole] = useState("job-seeker");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (role === "job-seeker") {
      navigate("/jobseeker-dashboard");
    } else if (role === "employer") {
      navigate("/employer-dashboard");
    } else if (role === "superuser") {
      navigate("/superuser-dashboard");
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-left">
        <img src={signinImage} alt="Sign In" className="signin-image" />
      </div>

      <div className="signin-right">
        <h2>Sign In to Your Account</h2>
        <form onSubmit={handleSubmit}>
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
            <label className="superuser-role">
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

          <button type="submit" className="signin-button">
            Sign In
          </button>
        </form>

        <div className="signin-footer">
          Don't have an account? <a href="/signup">Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;
