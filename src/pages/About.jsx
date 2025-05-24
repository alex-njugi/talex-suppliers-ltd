// src/pages/About.jsx
import React from 'react'
import '../index.css'

export default function About() {
  return (
    <div className="about-container">
      <h1>About Talex Suppliers Limited</h1>

      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          Talex Suppliers Limited is a premium provider of car accessories and powerline supply tools,
          dedicated to excellence, innovation, and reliability. Founded with a passion for automotive enhancement
          and electrical safety, we are committed to delivering top-tier products to every customer we serve.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          To power journeys and protect lives by equipping individuals and businesses with exceptional automotive
          accessories and powerline tools that exceed industry standards.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Vision</h2>
        <p>
          To be Kenya’s leading supplier of car accessories and electrical tools — trusted for quality, service,
          and innovation across Africa and beyond.
        </p>
      </section>

      <section className="about-section">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>✅ Premium, thoroughly tested products</li>
          <li>🚚 Fast, nationwide delivery</li>
          <li>📞 Excellent customer service</li>
          <li>💼 Trusted by auto professionals and electricians</li>
        </ul>
      </section>
    </div>
  )
}

