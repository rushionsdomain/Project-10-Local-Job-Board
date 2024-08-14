import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h2>Local Job Board</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signin">Sign In</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/"/></li>
      </ul>
    </nav>
  );
};

export default Navbar;
