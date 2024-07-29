import React from 'react';
import TilePanel from './TilePanel';
import './Navbar.css';
import logo from './pictures/favicon.ico';

const Navbar = () => {
  return (
    <nav className="logo">
      <img src={logo} alt="Logo Mayday" />
    </nav>
  );
};

export default Navbar;
