// src/components/Navbar.jsx
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="logo">Talex <span>Suppliers</span></div>
      
      <div className={`nav-links ${open ? 'open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <button className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </button>
    </nav>
  )
}
