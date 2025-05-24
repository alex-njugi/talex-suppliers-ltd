// src/pages/AdminDashboard.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

export default function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <div className="admin-panels">
        <Link to="/admin/products" className="admin-card">
          <h3>📦 Manage Products</h3>
          <p>Edit, Add, or Delete Inventory</p>
        </Link>
        <Link to="/admin/orders" className="admin-card">
          <h3>🧾 Manage Orders</h3>
          <p>View & update order statuses</p>
        </Link>
        <Link to="/admin/users" className="admin-card">
          <h3>👥 Manage Users</h3>
          <p>View and manage customers</p>
        </Link>
      </div>
    </div>
  )
}
