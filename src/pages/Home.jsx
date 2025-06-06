import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../index.css';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="hero-section">
      <video autoPlay muted loop playsInline className="hero-video">
        <source src="/videos/VID-20250603-WA0003.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay">
        <h1 data-aos="fade-up">Talex Suppliers Limited</h1>
        <p data-aos="fade-up" data-aos-delay="300">
          Premium Car Accessories & Powerline Supply Tools
        </p>
        <Link   to="/products" className="hero-button" data-aos="zoom-in" data-aos-delay="600">
          Shop Now
        </Link>
      </div>
    </section>
  );
}
