// src/pages/AdminOrders.jsx
import React from 'react'
import '../index.css'

const orders = [
  {
    id: 'ORD001',
    customer: 'Alex Njugi',
    date: '2025-05-21',
    total: 4300,
    status: 'Delivered',
  },
  {
    id: 'ORD002',
    customer: 'Faith Mwangi',
    date: '2025-05-20',
    total: 3200,
    status: 'Pending',
  },
  {
    id: 'ORD003',
    customer: 'Brian Otieno',
    date: '2025-05-18',
    total: 1800,
    status: 'Shipped',
  },
]

export default function AdminOrders() {
  return (
    <div className="admin-orders">
      <h2>Manage Orders</h2>
      <div className="orders-table">
        <div className="orders-header">
          <p>Order ID</p>
          <p>Customer</p>
          <p>Date</p>
          <p>Total</p>
          <p>Status</p>
          <p>Actions</p>
        </div>

        {orders.map(order => (
          <div className="orders-row" key={order.id}>
            <p>{order.id}</p>
            <p>{order.customer}</p>
            <p>{order.date}</p>
            <p>KSh {order.total.toLocaleString()}</p>
            <p className={`order-status ${order.status.toLowerCase()}`}>{order.status}</p>
            <p><button className="order-action">Update</button></p>
          </div>
        ))}
      </div>
    </div>
  )
}
