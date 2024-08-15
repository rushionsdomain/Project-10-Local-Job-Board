import React, { useState } from 'react';
import 'boxicons';
import "./Navbar.css";
import logo from "./Logo.jpeg";

function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Implement the search functionality here
    console.log('Searching for:', searchTerm);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img src={logo} alt="Logo" className="logo" />
        </a>
      </div>
      <form className="navbar-search" onSubmit={handleSearchSubmit}>
        <input 
          type="text" 
          placeholder="Search..." 
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit">
        <box-icon name='search-alt'></box-icon>
        </button>
      </form>
      
      <ul className="navbar-links">
        <li>
          <a href="HomePage">
            <box-icon name='home-circle'></box-icon> Home
          </a>
        </li>
        <li>
          <a href="/JobList">
            <box-icon name='briefcase'></box-icon> Jobs
          </a>
        </li>
        <li>
          <a href="/ApplyForm.css">
            <i className='bx bx-plus'></i> Apply
          </a>
        </li>
        <li>
          <a href="/Profile">
            <box-icon name='user'></box-icon> Profile
          </a>
        </li>
        <li>
          <a href="/SignInForm">
            <box-icon name='user-circle'></box-icon> Sign In
          </a>
        </li>
        <li>
          <a href="/RegisterForm">
            <box-icon name='user-plus'></box-icon> Sign Up
          </a>
        </li>
      </ul>

      </nav>
  );
}

export default Navbar;
