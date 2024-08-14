import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import SignInForm from './components/SignInForm';
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <>
    <HomePage />
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<SignInForm />} />
        <Route path="/" element={<RegisterForm />} />
      </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
