// src/pages/Contact.jsx
import React from 'react'
import '../index.css'

export default function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      <div className="contact-content">
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p><strong>📍 Address:</strong> 1234 Talex Street, Nairobi, Kenya</p>
          <p><strong>📞 Phone:</strong> +254 712 345 678</p>
          <p><strong>📧 Email:</strong> info@talexsuppliers.com</p>
        </div>

        <form className="contact-form">
          <h3>Send Us a Message</h3>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  )
}
