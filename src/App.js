// App.js
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
import JobSeekerDashboard from "./components/JobSeekerDashboard";
import EmployerDashboard from "./components/EmployerDashboard";
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

          {/* Protected Routes */}
          <Route
            path="/jobseeker/dashboard"
            element={
              <ProtectedRoute userRole={userRole} requiredRole="JobSeeker">
                <JobSeekerDashboard onLogout={handleLogout} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employer/dashboard"
            element={
              <ProtectedRoute userRole={userRole} requiredRole="Employer">
                <EmployerDashboard onLogout={handleLogout} />
              </ProtectedRoute>
            }
          />
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
