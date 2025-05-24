import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="product-card-link">
      <div className="product-card" data-aos="zoom-in">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p className="price">KSh {product.price.toLocaleString()}</p>
        <button>View Product</button>
      </div>
    </Link>
  )
}
