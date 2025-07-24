import React from 'react';
import './NavBar.css';

const Navbar = ({ onSignUp }) => {
  return (
    <nav className="navbar">
      <div className="navbar-title">Hari_Ram Turf</div>
      <div className="navbar-buttons">
        <button className="btn-blue" onClick={onSignUp}>Sign Up</button>
        <button className="btn-blue">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
