import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/RegisterForm";
import Login from "./components/SignInForm";
import Home from "./components/HomePage";
import JobList from "./components/JobList";
import JobDetails from "./components/JobDetails";
import Profile from "./components/Profile";

function App() {
  return (
    <div >
      <SignInForm/>
      <RegisterForm/>
       <HomePage />
        <Footer />
      
    </div>

  );
}

export default App;
