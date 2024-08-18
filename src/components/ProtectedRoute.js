// ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ userRole, requiredRole, children }) => {
  if (!userRole || userRole !== requiredRole) {
    return <Navigate to="/signin" />; // Redirect to Sign In if no role or incorrect role
  }

  return children; // Render the dashboard component if the role matches
};

export default ProtectedRoute;
