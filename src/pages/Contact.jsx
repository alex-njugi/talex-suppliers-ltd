import React from 'react';
import '../index.css';

export default function Contact() {
  return (
    <section className="contact-page">
      <h1 className="contact-title">Contact us</h1>
      <p className="contact-description">
        Got a question? Send us a message. We respond as soon as possible.
      </p>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8196336956303!2d36.82710077497707!3d-1.2819903356214455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f112b90160403%3A0x85e4de3143032cab!2sTALEX%20SUPPLIERS%20LTD!5e0!3m2!1sen!2ske!4v1749224366122!5m2!1sen!2ske"
          allowFullScreen=""
          loading="lazy"
          title="Talex Location"
        ></iframe>
      </div>

      <div className="contact-grid">
        {/* Message Form */}
        <div className="contact-form">
          <h2>Drop Us Message</h2>
          <form>
            <label>Name</label>
            <input type="text" placeholder="Enter your name" required />
            <label>Email</label>
            <input type="email" placeholder="Enter your email address" required />
            <label>Message</label>
            <textarea placeholder="Your message here..." rows="5" required></textarea>
            <button type="submit">Submit →</button>
          </form>
        </div>

        {/* Info Section */}
        <div className="contact-info">
          <h2>Get in touch</h2>
          <p>Feel free to contact us on any of the listed contact methods below</p>
          <div className="info-item"><span>📍</span><strong>Address</strong><br />Ngong Road P O 45425 Nairobi KE</div>
          <div className="info-item"><span>📞</span><strong>Phone</strong><br />+254708444961</div>
          <div className="info-item"><span>📧</span><strong>Email</strong><br />info@talexsuppliers.com</div>
        </div>
      </div>
    </section>
  );
}

