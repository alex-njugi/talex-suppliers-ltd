// src/components/Footer.jsx
import React from 'react'
import '../index.css'
import { FaInstagram, FaTiktok, FaEnvelope, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="footer">

      <div className="social-links">
        <a href="https://wa.me/254792814605" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a href="https://www.instagram.com/talex_suppliersltd/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.tiktok.com/@talexsuppliers" target="_blank" rel="noopener noreferrer">
          <FaTiktok />
        </a>
        <a href="mailto:talexsuppliers@gmail.com">
          <FaEnvelope />
        </a>
      </div>

      <p>kirinyaga business centre- kirinyaga road nairobi, Kenya 522-00300</p>
      <p>
        Copyright © {new Date().getFullYear()} Talex Suppliers Limited. All Rights Reserved — built by{" "}
        <a href="https://www.alexnjugi.com/" target="_blank" rel="noopener noreferrer" className="footer-link">Alex Njugi</a>
      </p>
    </footer>
  )
}
