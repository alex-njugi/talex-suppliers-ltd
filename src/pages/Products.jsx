// src/pages/Products.jsx
import React, { useState, useEffect } from 'react'
import '../index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

const dummyProducts = [
  { id: 1, name: 'Gladiator .D. Polish', category: 'car', price: 'KSh 300', image: '/images/gladiator.jpg' },
  { id: 2, name: 'Carall Wipers', category: 'car', price: 'KSh 200', image: '/images/carall.png' },
  { id: 3, name: 'Concrete Climbers', category: 'powerline', price: 'KSh 5,000', image: '/images/concrete.png' },
  { id: 4, name: 'Ratchet Heavy Duty', category: 'powerline', price: 'KSh 7,500', image: '/images/ratchet.png' },
]

export default function Products() {
  const [category, setCategory] = useState('all')
  const [search, setSearch] = useState('')
  const { cartItems, addToCart, increment, decrement } = useCart()
  const navigate = useNavigate()

  useEffect(() => {
    AOS.init({ duration: 800 })
  }, [])

  const filteredProducts = dummyProducts.filter(p =>
    (category === 'all' || p.category === category) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  )

  const getQuantity = (id) => {
    const found = cartItems.find(item => item.id === id)
    return found ? found.quantity : 0
  }

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
        {filteredProducts.map(product => {
          const quantity = getQuantity(product.id)

          return (
            <div className="product-card" data-aos="zoom-in" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>

              <button onClick={() => addToCart(product)}>Add to Cart</button>

              {quantity > 0 && (
                <>
                  <div className="quantity-controls">
                    <button onClick={() => decrement(product.id)}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => increment(product.id)}>+</button>
                  </div>

                  <button className="view-cart-btn" onClick={() => navigate('/cart')}>
                    View Your Cart
                  </button>
                </>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
