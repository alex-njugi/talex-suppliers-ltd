import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    const exists = cartItems.find(item => item.id === product.id)
    if (!exists) {
      setCartItems(prev => [...prev, { ...product, quantity: 1 }])
    }
  }

  const increment = (productId) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  }

  const decrement = (productId) => {
    setCartItems(prev =>
      prev
        .map(item =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    )
  }

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId))
  }

  const getQuantity = (productId) => {
    const item = cartItems.find(item => item.id === productId)
    return item ? item.quantity : 0
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increment,
        decrement,
        removeFromCart,
        getQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
