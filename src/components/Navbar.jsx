import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
        <img src="images/logo.png" alt="Talex Suppliers Logo" className="logo-img" />
      </NavLink>

      <div className="center-links">
        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
        <NavLink to="/products" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Products</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About Us</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contacts</NavLink>
      </div>

      <div className="auth-links">
        <NavLink to="/cart" className="nav-cart">
          <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
        </NavLink>
        <NavLink to="/login" className="nav-auth">Log in</NavLink>
      </div>

      <button className="hamburger" onClick={() => setOpen(!open)}>☰</button>

      {/* Mobile Dropdown */}
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/products" className="nav-link">Products</NavLink>
        <NavLink to="/about" className="nav-link">About Us</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
        <NavLink to="/login" className="nav-link">Login</NavLink>
        <NavLink to="/signup" className="nav-link">Signup</NavLink>
      </div>
    </nav>
  );
}
