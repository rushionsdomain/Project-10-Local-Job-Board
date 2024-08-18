import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import JobSeekerDashboard from "./components/jobseekers/JobSeekerDashboard";
import JobListing from "./components/jobseekers/JobListing";
import ApplicationForm from "./components/jobseekers/ApplicationForm";
import Messages from "./components/jobseekers/Messages";
import Notifications from "./components/jobseekers/Notifications";
import Profile from "./components/jobseekers/Profile";
import EmployerDashboard from "./components/employers/EmployerDashboard";
import SuperuserDashboard from "./components/SuperuserDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

function App() {
  const [userRole, setUserRole] = useState(null); // Track user role

  const handleLogin = (role) => {
    setUserRole(role); // Set the user role after login
  };

  const handleLogout = () => {
    setUserRole(null); // Clear the role on logout
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn onLogin={handleLogin} />} />

          {/* Protected Routes for Job Seekers */}
          <Route
            path="/jobseeker/dashboard"
            element={
              <ProtectedRoute userRole={userRole} requiredRole="JobSeeker">
                <JobSeekerDashboard onLogout={handleLogout} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/jobseeker/job-listing"
            element={
              <ProtectedRoute userRole={userRole} requiredRole="JobSeeker">
                <JobListing />
              </ProtectedRoute>
            }
          />
          <Route
            path="/jobseeker/application-form"
            element={
              <ProtectedRoute userRole={userRole} requiredRole="JobSeeker">
                <ApplicationForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/jobseeker/messages"
            element={
              <ProtectedRoute userRole={userRole} requiredRole="JobSeeker">
                <Messages />
              </ProtectedRoute>
            }
          />
          <Route
            path="/jobseeker/notifications"
            element={
              <ProtectedRoute userRole={userRole} requiredRole="JobSeeker">
                <Notifications />
              </ProtectedRoute>
            }
          />
          <Route
            path="/jobseeker/profile"
            element={
              <ProtectedRoute userRole={userRole} requiredRole="JobSeeker">
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* Protected Routes for Employers */}
          <Route
            path="/employer/dashboard"
            element={
              <ProtectedRoute userRole={userRole} requiredRole="Employer">
                <EmployerDashboard onLogout={handleLogout} />
              </ProtectedRoute>
            }
          />

          {/* Protected Routes for Superusers */}
          <Route
            path="/superuser/dashboard"
            element={
              <ProtectedRoute userRole={userRole} requiredRole="Superuser">
                <SuperuserDashboard onLogout={handleLogout} />
              </ProtectedRoute>
            }
          />

          {/* Redirect for unmatched routes */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
