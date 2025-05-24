import React from 'react'
import { Navigate } from 'react-router-dom'

// Simulated auth check (replace this with real logic later)
const isAuthenticated = () => {
  return localStorage.getItem('talex_token') !== null
}

export default function ProtectedRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to="/login" />
}
