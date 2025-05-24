// src/pages/Orders.jsx
import React from 'react'
import '../index.css'

const userOrders = [
  {
    id: 'TXN001',
    date: '2025-05-21',
    total: 4300,
    items: ['Turbo Air Filter', 'LED Fog Lights'],
    status: 'Delivered',
  },
  {
    id: 'TXN002',
    date: '2025-05-15',
    total: 3200,
    items: ['Surge Protector'],
    status: 'Pending',
  },
]

export default function Orders() {
  return (
    <div className="orders-container">
      <h2>My Orders</h2>

      {userOrders.length === 0 ? (
        <p className="no-orders">You haven’t placed any orders yet.</p>
      ) : (
        <div className="orders-list">
          {userOrders.map(order => (
            <div key={order.id} className="order-box">
              <p><strong>Order ID:</strong> {order.id}</p>
              <p><strong>Date:</strong> {order.date}</p>
              <p><strong>Items:</strong> {order.items.join(', ')}</p>
              <p><strong>Total:</strong> KSh {order.total.toLocaleString()}</p>
              <p><strong>Status:</strong> <span className={`order-status ${order.status.toLowerCase()}`}>{order.status}</span></p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
