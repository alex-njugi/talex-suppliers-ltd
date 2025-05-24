import React from 'react'
import '../index.css'

export default function LoadingSpinner() {
  return (
    <div className="spinner-wrapper">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  )
}
