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
import ApplicationHistory from "./components/ApplicationHistory";
import JobRecommendations from "./components/JobRecommendations";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";

function App() {
  const [userRole, setUserRole] = useState(null);

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn onLogin={setUserRole} />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected routes */}
        <Route
          element={
            <ProtectedRoute userRole={userRole} requiredRole="jobseeker">
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="/home" element={<Home />} />
          <Route path="/apply/:jobId" element={<ApplicationForm />} />
          <Route path="/job-listings" element={<JobListing />} />
          <Route path="/application-history" element={<ApplicationHistory />} />
          <Route path="/job-recommendations" element={<JobRecommendations />} />
        </Route>

        {/* Redirect unknown routes to landing page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
