// src/pages/Profile.jsx
import React from 'react'
import '../index.css'

const user = {
  name: 'Alex Njugi Karanja',
  email: 'alex@example.com',
  phone: '+254 712 345 678',
}

const orders = [
  {
    id: 'TXN001',
    date: '2025-05-21',
    items: ['Turbo Air Filter', 'LED Fog Lights'],
    total: 4300,
    status: 'Delivered',
  },
  {
    id: 'TXN002',
    date: '2025-05-15',
    items: ['Surge Protector'],
    total: 3200,
    status: 'Pending',
  },
]

export default function Profile() {
  return (
    <div className="profile-container">
      <h2>Your Profile</h2>

      <div className="profile-card">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
      </div>

      <h3>Order History</h3>
      <div className="order-history">
        {orders.map(order => (
          <div className="order-item" key={order.id}>
            <p><strong>Order ID:</strong> {order.id}</p>
            <p><strong>Date:</strong> {order.date}</p>
            <p><strong>Items:</strong> {order.items.join(', ')}</p>
            <p><strong>Total:</strong> KSh {order.total.toLocaleString()}</p>
            <p><strong>Status:</strong> <span className={`order-status ${order.status.toLowerCase()}`}>{order.status}</span></p>
          </div>
        ))}
      </div>
    </div>
  )
}
