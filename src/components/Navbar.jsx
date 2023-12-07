// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <h1>VPN</h1>
      </Link>
      <ul className="menu">
        <li><Link className="menu-link" to="/productos">Inicio</Link></li>
        <li><Link className="menu-link" to="/productos/europa">Europa</Link></li>
        <li><Link className="menu-link" to="/productos/america">América</Link></li>
        <li><Link className="menu-link" to="/productos/asia">Asia</Link></li>
        <li><Link className="menu-link" to="/nosotros">Nosotros</Link></li>
        <li><Link className="menu-link" to="/contacto">Contacto</Link></li>
        <li><CartWidget /></li>
      </ul>
    </nav>
  );
};

export default Navbar;
