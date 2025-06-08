// src/pages/ProductDetails.jsx
import React from 'react'
import { useParams } from 'react-router-dom'
import '../index.css'

const dummyProducts = [
  { id: 1, name: 'Gladiator Dashboard Polish', category: 'car', price: 'KSh 300', image: '/images/gladiator.jpg', description: 'Gladiator Dashboard Polish, now available in Strawberry, Vanilla, Oud, Peach & Lemon.' },
  { id: 2, name: 'Carall', category: 'car', price: 'KSh 200', image: '/images/carall.png', description: 'Carall Windscreen Wiper – Smooth, Silent, and Streak-Free.' },
  { id: 3, name: 'Concrete Climbers', category: 'powerline', price: 'KSh 3,200', image: '/images/concrete.png', description: 'Concrete Climbers – Built to Outlast, Built to Perform.' },
  { id: 4, name: 'Ratchet Heavy Duty', category: 'powerline', price: 'KSh 7,500', image: '/images/ratchet.png', description: 'Heavy-Duty Ratchet Puller – Tough Jobs Made Easy.' },
]

export default function ProductDetails() {
  const { id } = useParams()
  const product = dummyProducts.find(p => p.id === parseInt(id))

  if (!product) return <div className="product-not-found">Product not found</div>

  return (
    <div className="product-details-container">
      <img src={product.image} alt={product.name} className="product-details-img" />
      <div className="product-details-info">
        <h2>{product.name}</h2>
        <p className="product-details-price">{product.price}</p>
        <p className="product-details-desc">{product.description}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  )
}
