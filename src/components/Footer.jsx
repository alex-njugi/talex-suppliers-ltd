// src/components/Footer.jsx
import React from 'react'
import '../index.css'
import { FaInstagram, FaTiktok, FaEnvelope, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="footer">

      <div className="social-links">
        <a href="https://wa.me/254712345678" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.tiktok.com/@yourhandle" target="_blank" rel="noopener noreferrer">
          <FaTiktok />
        </a>
        <a href="mailto:info@talexsuppliers.com">
          <FaEnvelope />
        </a>
      </div>

      <p>© {new Date().getFullYear()} Talex Suppliers Limited</p>
      <p>Premium Car Accessories & Powerline Supply Tools</p>
    </footer>
  )
}
