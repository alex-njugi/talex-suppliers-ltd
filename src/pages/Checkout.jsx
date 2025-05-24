// src/pages/Checkout.jsx
import React from 'react'
import '../index.css'

const cartItems = [
  { id: 1, name: 'Turbo Air Filter', price: 2500, quantity: 1 },
  { id: 3, name: 'Surge Protector', price: 3200, quantity: 2 },
]

export default function Checkout() {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

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
              <p>KSh {(item.price * item.quantity).toLocaleString()}</p>
            </div>
          ))}
          <hr />
          <div className="summary-total">
            <strong>Total:</strong>
            <strong>KSh {total.toLocaleString()}</strong>
          </div>
          <button className="checkout-pay-btn">Pay Now</button>
        </div>
      </div>
    </div>
  )
}
