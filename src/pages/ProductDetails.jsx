import React from 'react'
import { useParams } from 'react-router-dom'
import '../index.css'
import products from '../data/products'
import { useCart } from '../context/CartContext'

export default function ProductDetails() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const product = products.find(p => p.id === parseInt(id))

  if (!product) return <div className="product-not-found">Product not found</div>

  return (
    <div className="product-details-container">
      <img src={product.image} alt={product.name} className="product-details-img" />
      <div className="product-details-info">
        <h2>{product.name}</h2>
        <p className="product-details-price">{product.price}</p>
        <p className="product-details-desc">{product.description}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  )
}
