import React from 'react';
import './header.css'; // Create this file for custom styles specific to the header

function Header() {
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <nav className="navbar">
        <ul>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#listings">Listings</a></li>
          <li><a href="#community">Community</a></li>
          <li><a href="#resources">Resources</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="auth-buttons">
          <button className="sign-in-btn">Sign In</button>
          <button className="register-btn">Register</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
