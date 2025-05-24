// src/pages/Home.jsx
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../index.css'

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <section className="home-container">
      <div className="hero-section">
        <h1 data-aos="fade-up">
          Talex Suppliers Limited
        </h1>
        <p data-aos="fade-up" data-aos-delay="300">
          Premium Car Accessories & Powerline Supply Tools
        </p>
        <button className="hero-button" data-aos="zoom-in" data-aos-delay="600">
          Shop Now
        </button>
      </div>

      <div className="features-section">
        <div className="feature-card" data-aos="fade-right">
          <h3>🚗 Top-Quality Car Gear</h3>
          <p>We stock high-end car accessories to enhance performance and style.</p>
        </div>
        <div className="feature-card" data-aos="fade-left">
          <h3>⚡ Powerline Solutions</h3>
          <p>Tools and gear for safe, powerful energy setups — always reliable.</p>
        </div>
      </div>
    </section>
  )
}
