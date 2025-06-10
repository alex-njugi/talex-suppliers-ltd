import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

export default function Cart() {
  const { cartItems, increment, decrement, removeFromCart } = useCart()
  const navigate = useNavigate()

  const total = cartItems.reduce((acc, item) =>
    acc + (parseInt(item.price.replace(/[^\d]/g, '')) || 0) * item.quantity, 0
  )

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-details">
                  <h4>{item.name}</h4>
                  <p>KSh {item.price} x {item.quantity}</p>

                  <div className="quantity-controls">
                    <button onClick={() => decrement(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increment(item.id)}>+</button>
                  </div>

                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total: KSh {total.toLocaleString()}</h3>
            <button className="checkout-btn" onClick={() => navigate('/checkout')}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  )
}
