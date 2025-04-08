// src/components/cart/Cart.jsx
import React, { useContext, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { createOrder } from '../../services/firebase/orders'

function Cart() {
  const { cart, clearCart, removeItem, totalQuantity, totalPrice } = useContext(CartContext)

  // 1) Creamos estados para los datos del comprador
  const [buyerName, setBuyerName] = useState('')
  const [buyerPhone, setBuyerPhone] = useState('')
  const [buyerEmail, setBuyerEmail] = useState('')

  const navigate = useNavigate()

  const handleCheckout = async () => {
    const orderData = {
      items: cart,
      total: totalPrice,
      buyer: {
        name: buyerName,
        phone: buyerPhone,
        email: buyerEmail
      }
    }

    try {
      const orderId = await createOrder(orderData)
      console.log("Orden creada con ID:", orderId)
      navigate('/order-confirmation', { state: { orderId } })
      clearCart()
    } catch (error) {
      console.error("Error creando la orden:", error)
    }
  }

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

      {cart.map(item => {
        const subtotal = item.price * item.quantity
        return (
          <div key={item.id} style={{ border: '1px solid #ccc', margin: '1rem auto', padding: '1rem', maxWidth: '400px', textAlign: 'left' }}>
            <h3>{item.name}</h3>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio unitario: ${item.price}</p>
            <p>Subtotal: ${subtotal}</p>
            <button onClick={() => removeItem(item.id)}>Eliminar producto</button>
          </div>
        )
      })}

      <div style={{ marginTop: '2rem' }}>
        <h3>Total de productos: {totalQuantity}</h3>
        <h3>Precio total: ${totalPrice}</h3>
      </div>

      {/* Formulario para ingresar datos del comprador */}
      <div style={{ marginTop: '2rem' }}>
        <h3>Completa tus datos para finalizar la compra</h3>
        <div style={{ marginBottom: '1rem' }}>
          <label>Nombre: </label>
          <input
            type="text"
            value={buyerName}
            onChange={(e) => setBuyerName(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Teléfono: </label>
          <input
            type="text"
            value={buyerPhone}
            onChange={(e) => setBuyerPhone(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Email: </label>
          <input
            type="email"
            value={buyerEmail}
            onChange={(e) => setBuyerEmail(e.target.value)}
          />
        </div>
      </div>

      <button onClick={clearCart} style={{ marginRight: '1rem', marginTop: '1rem' }}>
        Vaciar Carrito
      </button>
      <button onClick={handleCheckout} style={{ marginRight: '1rem', marginTop: '1rem' }}>
        Finalizar Compra
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
