import React from "react";
import EmployerNavbar from "./EmployerNavbar";
import { Outlet } from "react-router-dom";

const EmployerDashboard = () => {
  return (
    <div>
      <EmployerNavbar />
      <h2>Employer Dashboard</h2>
      <Outlet />
    </div>
  );
};

export default EmployerDashboard;
