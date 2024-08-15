import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/RegisterForm";
import Login from "./components/SignInForm";
import Home from "./components/HomePage";
import JobList from "./components/JobList";
import JobDetails from "./components/JobDetails";
import Profile from "./components/Profile";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import ChatWindow from "./components/ChatWindow";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/messaging" element={<ChatWindow />} />
      </Routes>
    </Router>
  );
}

export default App;
