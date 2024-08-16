import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Landing from "./components/Landing";
import RegisterForm from "./components/RegisterForm";
import Login from "./components/SignInForm";
import JobList from "./components/JobList";
import JobDetails from "./components/JobDetails";
import Profile from "./components/Profile";
import JobSeekerDashboard from "./components/JobSeekerDashboard";
import EmployerDashboard from "./components/EmployerDashboard";
import SuperuserDashboard from "./components/SuperuserDashboard";

// Simulated authentication check (this should come from your actual auth logic)
const isAuthenticated = () => {
  // Add your authentication logic here (JWT token check or logged-in state)
  return localStorage.getItem("authToken") ? true : false;
};

// Get user role from local storage (assuming it's set during login)
const getUserRole = () => {
  return localStorage.getItem("userRole");
};

// Protected route component with role-based redirection
const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

// Route component with role-based redirection
const RoleBasedRoute = ({ role, element }) => {
  const userRole = getUserRole();

  if (userRole === role) {
    return <PrivateRoute element={element} />;
  } else if (isAuthenticated()) {
    return <Navigate to="/home" />;
  } else {
    return <Navigate to="/login" />;
  }
};

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<RegisterForm />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route
            path="/home"
            element={
              <PrivateRoute
                element={<Navigate to={`/${getUserRole()}-dashboard`} />}
              />
            }
          />
          <Route
            path="/job-seeker-dashboard"
            element={
              <RoleBasedRoute
                role="job-seeker"
                element={<JobSeekerDashboard />}
              />
            }
          />
          <Route
            path="/employer-dashboard"
            element={
              <RoleBasedRoute role="employer" element={<EmployerDashboard />} />
            }
          />
          <Route
            path="/superuser-dashboard"
            element={
              <RoleBasedRoute
                role="superuser"
                element={<SuperuserDashboard />}
              />
            }
          />
          <Route
            path="/jobs"
            element={<PrivateRoute element={<JobList />} />}
          />
          <Route
            path="/jobs/:id"
            element={<PrivateRoute element={<JobDetails />} />}
          />
          <Route
            path="/profile"
            element={<PrivateRoute element={<Profile />} />}
          />

          {/* Catch-all Route for undefined paths */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
