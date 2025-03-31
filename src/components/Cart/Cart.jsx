// src/components/cart/Cart.jsx
import React, { useContext } from 'react'
import { CartContext } from '../../../src/components/context/CartContext'

function Cart() {
  const { cart, clearCart, removeItem } = useContext(CartContext)

  if (cart.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h2>El carrito está vacío</h2>
      </div>
    )
  }

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Carrito de Compras</h1>
      {cart.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Cantidad: {item.quantity}</p>
          <p>Precio unitario: ${item.price}</p>
          <button onClick={() => removeItem(item.id)}>Eliminar</button>
        </div>
      ))}
      
      <button onClick={clearCart}>
        Limpiar Carrito
      </button>
      <br />
      <button style={{ marginTop: '1rem' }}>
        Finalizar Compra
      </button>
    </div>
  )
}

export default Cart
