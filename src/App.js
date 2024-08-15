
import './App.css';
import HomePage from './components/HomePage';
import Footer from './components/Footer'
import SignInForm from './components/SignInForm';
import RegisterForm from './components/RegisterForm';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';

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
