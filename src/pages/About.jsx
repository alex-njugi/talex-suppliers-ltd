import React from 'react';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import '../index.css';

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="about-container">
      {/* 1. Hero Heading */}
      <section className="about-hero" data-aos="fade-up">
        <h1>Who We Are ?</h1>
        <p>Driven by quality. Powered by trust.</p>
        <p>
          Talex Suppliers Limited was founded to bring top-tier car accessories and powerline tools
          to Kenya and beyond. We’re built on quality, reliability, and service excellence.
        </p>
      </section>

      {/* 2. Grid Highlights */}
      <section className="about-cards" data-aos="fade-up">
        <div className="card">✅ <h3>Quality Accessories</h3><p>Only the best, thoroughly tested products.</p></div>
        <div className="card">⚡ <h3>Powerline Expertise</h3><p>Supplying trusted electrical solutions.</p></div>
        <div className="card">🤝 <h3>Trusted Service</h3><p>We prioritize your experience, always.</p></div>
      </section>

      {/* 3. Timeline */}
      <section className="about-timeline" data-aos="fade-up">
        <h2>Our Journey</h2>
        <div className="timeline">
          <div className="event"><span>📌</span> <strong>2022</strong> – Talex Suppliers Founded</div>
          <div className="event"><span>🚚</span> <strong>2023</strong> – First 1000 Clients</div>
          <div className="event"><span>🌍</span> <strong>2024</strong> – Expanding Nationwide</div>
        </div>
      </section>

      {/* 4. Image & Text */}
      <section className="about-image-text" data-aos="fade-up">
        <img src="/images/about-team.jpg" alt="Talex Team" />
        <div>
          <h2>Empowering Roads & Power</h2>
          <p>At Talex, we don’t just supply, we empower Kenya’s road and energy industries through reliable products and real impact.</p>
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section className="about-reasons" data-aos="fade-up">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>🚗 Wide range of automotive accessories</li>
          <li>🛠️ Premium-grade tools</li>
          <li>📦 Fast delivery</li>
          <li>📞 Real-time support</li>
        </ul>
      </section>

      {/* 6. CTA */}
      <div className="about-cta" data-aos="zoom-in">
        <h2>Ready to upgrade your tools or ride?</h2>
        <Link to="/products" className="explore-btn">Explore Products</Link>
      </div>
    </div>
  );
}
