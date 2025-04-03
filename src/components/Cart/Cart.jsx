// src/components/cart/Cart.jsx
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

function Cart() {
  const { cart, clearCart, removeItem, totalQuantity, totalPrice } = useContext(CartContext)

  if (cart.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h2>No hay productos en el carrito</h2>
        <Link to="/">
          <button style={{ marginTop: '1rem' }}>
            Volver a la tienda
          </button>
        </Link>
      </div>
    )
  }

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Carrito de Compras</h1>

      {/* Listado de productos en el carrito */}
      {cart.map(item => {
        const subtotal = item.price * item.quantity
        return (
          <div 
            key={item.id} 
            style={{ 
              border: '1px solid #ccc', 
              margin: '1rem auto', 
              padding: '1rem', 
              maxWidth: '400px', 
              textAlign: 'left'
            }}
          >
            <h3>{item.name}</h3>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio unitario: ${item.price}</p>
            <p>Subtotal: ${subtotal}</p>
            <button onClick={() => removeItem(item.id)}>Eliminar producto</button>
          </div>
        )
      })}

      {/* Totales */}
      <div style={{ marginTop: '2rem' }}>
        <h3>Total de productos: {totalQuantity}</h3>
        <h3>Precio total: ${totalPrice}</h3>
      </div>

      {/* Botones */}
      <button onClick={clearCart} style={{ marginRight: '1rem', marginTop: '1rem' }}>
        Vaciar Carrito
      </button>
      <Link to="/">
        <button style={{ marginTop: '1rem' }}>
          Seguir comprando
        </button>
      </Link>
    </div>
  )
}

export default Cart
