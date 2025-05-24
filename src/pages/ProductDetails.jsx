// src/pages/ProductDetails.jsx
import React from 'react'
import { useParams } from 'react-router-dom'
import '../index.css'

const dummyProducts = [
  { id: 1, name: 'Turbo Air Filter', category: 'car', price: 'KSh 2,500', image: '/images/car1.jpg', description: 'Enhance your car’s engine performance with our premium Turbo Air Filter.' },
  { id: 2, name: 'LED Fog Lights', category: 'car', price: 'KSh 1,800', image: '/images/car2.jpg', description: 'Brighten your path in any weather with our powerful LED Fog Lights.' },
  { id: 3, name: 'Surge Protector', category: 'powerline', price: 'KSh 3,200', image: '/images/power1.jpg', description: 'Protect your electrical systems from voltage spikes with reliability.' },
  { id: 4, name: 'Voltage Tester', category: 'powerline', price: 'KSh 950', image: '/images/power2.jpg', description: 'Test voltage safely and easily with our compact tester tool.' },
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
