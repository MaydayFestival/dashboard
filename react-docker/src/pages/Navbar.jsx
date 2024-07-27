import React from 'react';
import TilePanel from './TilePanel';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo"><h1>Dashboard organisation Mayday Festival</h1></div>
      <ul className="nav-links">
        <li><a href="https://maydayfestival.fr">Site public</a></li>
        <li><a href="#">À propos</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
