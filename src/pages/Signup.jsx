// src/pages/Signup.jsx
import React from 'react'
import '../index.css'

export default function Signup() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create an Account</h2>
        <form className="auth-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit">Sign Up</button>
        </form>
        <p className="auth-toggle">
          Already have an account?
          <a href="/login"> Login</a>
        </p>
      </div>
    </div>
  )
}
