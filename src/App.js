import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import SignInForm from "./components/SignInForm";
import HomePage from "./components/HomePage";
import JobList from "./components/JobList";
import JobDetails from "./components/JobDetails";

import Footer from './components/Footer';

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
