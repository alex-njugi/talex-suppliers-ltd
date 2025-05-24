import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../index.css'

export default function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <section className="hero-section">
      <div className="hero-text" data-aos="fade-up">
        <h1>
          Talex Suppliers Limited
        </h1>
        <p data-aos="fade-up" data-aos-delay="300">
          Premium Car Accessories & Powerline Supply Tools
        </p>
        <button className="hero-button" data-aos="zoom-in" data-aos-delay="600">
          Explore Products
        </button>
      </div>

      <div className="hero-bg" data-aos="fade-left">
        <img src="/images/hero-car.png" alt="Hero Car Accessory" />
      </div>
    </section>
  )
}
