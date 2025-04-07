// src/components/OrderConfirmation/OrderConfirmation.jsx
import React from 'react'
import { useLocation, Link } from 'react-router-dom'

function OrderConfirmation() {
  const location = useLocation()
  // Asumimos que pasamos el orderId como parte de location.state
  const { orderId } = location.state || {}

  if (!orderId) {
    return <p>No hay ninguna orden generada.</p>
  }

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>¡Gracias por tu compra!</h2>
      <p>Tu número de orden es: <strong>{orderId}</strong></p>
      <Link to="/">Volver a la tienda</Link>
    </div>
  )
}

export default OrderConfirmation
