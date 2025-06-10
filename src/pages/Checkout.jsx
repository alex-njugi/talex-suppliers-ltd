// src/pages/Checkout.jsx
import React from 'react'
import '../index.css'
import { useCart } from '../context/CartContext'
import axios from 'axios'

export default function Checkout() {
  const { cartItems } = useCart()

  const total = cartItems.reduce(
    (acc, item) =>
      acc + (parseInt(item.price.toString().replace(/[^\d]/g, '')) || 0) * item.quantity,
    0
  )

  const handleMpesaPayment = async (e) => {
  e.preventDefault()

  const phone = prompt("Enter your Safaricom number (+254...)")
  if (!phone || !phone.startsWith("+254")) {
    alert("Please enter a valid Safaricom number starting with +254")
    return
  }

  try {
    await axios.post('/api/stk-push', {
      phone,
      amount: total
    })

    alert('STK Push sent. Check your phone to complete the payment.')
  } catch (err) {
    alert('Failed to initiate payment. Try again.')
    console.error(err)
  }
}

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="checkout-grid">
          <form className="checkout-form">
            <h3>Shipping Details</h3>
            <input type="text" placeholder="Full Name" required />
            <input type="text" placeholder="Phone Number" required />
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Delivery Address" required />
            <textarea placeholder="Delivery Instructions (optional)" rows="3"></textarea>
          </form>

          <div className="order-summary">
            <h3>Order Summary</h3>
            {cartItems.map(item => (
              <div key={item.id} className="summary-item">
                <p>{item.name} × {item.quantity}</p>
                <p>KSh {(parseInt(item.price.toString().replace(/[^\d]/g, '')) * item.quantity).toLocaleString()}</p>
              </div>
            ))}
            <hr />
            <div className="summary-total">
              <strong>Total:</strong>
              <strong>KSh {total.toLocaleString()}</strong>
            </div>
            <button className="checkout-pay-btn" onClick={handleMpesaPayment}>
              Pay via M-Pesa
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
