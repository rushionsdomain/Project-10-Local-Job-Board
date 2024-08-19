import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ userRole, requiredRole, children }) => {
  if (!userRole || userRole !== requiredRole) {
    // Redirect to the landing page if not authorized
    return <Navigate to="/" />;
  }

  return children; // Render the protected component if authorized
};

export default ProtectedRoute;
