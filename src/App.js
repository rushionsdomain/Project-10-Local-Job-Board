import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ApplyForm from './components/ApplyForm';
import SignInForm from './components/SignInForm';
import RegisterForm from './components/RegisterForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import logo from './logo.svg';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <SignInForm />
        <RegisterForm />
        <ApplyForm />
        <Routes>
          {/* Define your routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
