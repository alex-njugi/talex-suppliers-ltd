// src/pages/Products.jsx
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const dummyProducts = [
  { id: 1, name: 'Turbo Air Filter', category: 'car', price: 'KSh 2,500', image: '/images/car1.jpg' },
  { id: 2, name: 'LED Fog Lights', category: 'car', price: 'KSh 1,800', image: '/images/car2.jpg' },
  { id: 3, name: 'Surge Protector', category: 'powerline', price: 'KSh 3,200', image: '/images/power1.jpg' },
  { id: 4, name: 'Voltage Tester', category: 'powerline', price: 'KSh 950', image: '/images/power2.jpg' },
]

export default function Products() {
  const [category, setCategory] = useState('all')
  const [search, setSearch] = useState('')

  useEffect(() => {
    AOS.init({ duration: 800 })
  }, [])

  const filteredProducts = dummyProducts.filter(p =>
    (category === 'all' || p.category === category) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="products-container">
      <h2 className="page-title" data-aos="fade-up">Our Products</h2>

      <div className="filters" data-aos="fade-up">
        <button onClick={() => setCategory('all')}>All</button>
        <button onClick={() => setCategory('car')}>Car Accessories</button>
        <button onClick={() => setCategory('powerline')}>Powerline Tools</button>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className="product-grid">
        {filteredProducts.map(product => (
          <Link to={`/product/${product.id}`} key={product.id} className="product-card-link">
            <div className="product-card" data-aos="zoom-in">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
              <button>View Product</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
