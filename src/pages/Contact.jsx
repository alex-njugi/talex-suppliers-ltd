import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../index.css';

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="contact-page">
      <h1 className="contact-title" data-aos="fade-down">Contact us</h1>
      <p className="contact-description" data-aos="fade-up">
        Got a question? Send us a message. We always respond as soon as possible.
      </p>

      <div className="map-container" data-aos="zoom-in">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8196336956303!2d36.82710077497707!3d-1.2819903356214455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f112b90160403%3A0x85e4de3143032cab!2sTALEX%20SUPPLIERS%20LTD!5e0!3m2!1sen!2ske!4v1749224366122!5m2!1sen!2ske"
          allowFullScreen=""
          loading="lazy"
          title="Talex Location"
        ></iframe>
      </div>

      <div className="contact-grid">
        <div className="contact-form" data-aos="fade-right">
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

        <div className="contact-info" data-aos="fade-left">
          <h2>Get in touch</h2>
          <p>Let's connect! Reach out to us via any of the options below.</p>

          <div className="info-item">
            <span>📍</span>
            <div>
              <strong>Address</strong>
              <p>kirinyaga business centre – kirinyaga road, Nairobi, Kenya 522-00300</p>
            </div>
          </div>

          <div className="info-item">
            <span>📞</span>
            <div>
              <strong>Phone</strong>
              <p>+254 722 690154</p>
              <p>+254 705 317188</p>
              <p>+254 702 840082</p>
            </div>
          </div>

          <div className="info-item">
            <span>📧</span>
            <div>
              <strong>Email</strong>
              <p>talexsuppliers@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
