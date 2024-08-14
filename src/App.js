import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <HomePage />
    <Footer />
    </>
  );
}

export default App;
