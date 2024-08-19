import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import ApplicationForm from "./components/ApplicationForm";
import JobListing from "./components/JobListing";
import Profile from "./components/Profile";
import ApplicationHistory from "./components/ApplicationHistory";
import JobRecommendations from "./components/JobRecommendations";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [userRole, setUserRole] = useState(null);

  const handleLogin = (role) => {
    setUserRole(role);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute userRole={userRole} requiredRole="jobseeker">
              <Layout>
                <Home />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/apply"
          element={
            <ProtectedRoute userRole={userRole} requiredRole="jobseeker">
              <Layout>
                <ApplicationForm />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/job-listings"
          element={
            <ProtectedRoute userRole={userRole} requiredRole="jobseeker">
              <Layout>
                <JobListing />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute userRole={userRole} requiredRole="jobseeker">
              <Layout>
                <Profile />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/application-history"
          element={
            <ProtectedRoute userRole={userRole} requiredRole="jobseeker">
              <Layout>
                <ApplicationHistory />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/job-recommendations"
          element={
            <ProtectedRoute userRole={userRole} requiredRole="jobseeker">
              <Layout>
                <JobRecommendations />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
