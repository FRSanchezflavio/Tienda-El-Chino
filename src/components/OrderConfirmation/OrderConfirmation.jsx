import React from 'react'
import { useLocation, Link } from 'react-router-dom'

function OrderConfirmation() {
  const { state } = useLocation()
  const orderId = state?.orderId
  
  if (!orderId) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h2>No hay ninguna orden generada</h2>
        <Link to="/">Volver a la tienda</Link>
      </div>
    )
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
