// src/pages/Login.jsx
import React, { useState } from 'react'
import '../index.css'

export default function Login() {
  const [isLogin, setIsLogin] = useState(true)

  const toggleMode = () => setIsLogin(!isLogin)

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{isLogin ? 'Login to Talex' : 'Create an Account'}</h2>
        <form className="auth-form">
          {!isLogin && <input type="text" placeholder="Full Name" required />}
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
        </form>
        <p className="auth-toggle">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span onClick={toggleMode}>{isLogin ? ' Signup' : ' Login'}</span>
        </p>
      </div>
    </div>
  )
}
