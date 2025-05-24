// src/pages/Cart.jsx
import React from 'react'
import '../index.css'

const cartItems = [
  { id: 1, name: 'Turbo Air Filter', price: 2500, quantity: 1, image: '/images/car1.jpg' },
  { id: 3, name: 'Surge Protector', price: 3200, quantity: 2, image: '/images/power1.jpg' },
]

export default function Cart() {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="cart-details">
              <h4>{item.name}</h4>
              <p>KSh {item.price.toLocaleString()} x {item.quantity}</p>
              <button className="remove-btn">Remove</button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Total: KSh {total.toLocaleString()}</h3>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  )
}
