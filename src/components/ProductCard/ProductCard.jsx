// src/components/ProductCard/ProductCard.jsx
import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../../src/components/context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import './ProductCard.css'

function ProductCard({ product }) {
  const [addedToCart, setAddedToCart] = useState(false)
  const navigate = useNavigate()
  // Obtenemos del Context la función para agregar ítems
  const { addItem } = useContext(CartContext)

  const handleAdd = (qty) => {
    // Sumamos producto al carrito
    addItem(product, qty)
    // Mostramos el botón "Terminar compra"
    setAddedToCart(true)
  }

  const handleCheckout = () => {
    navigate('/cart')
  }

  return (
    <div className="product-card">
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
      <p>Stock: {product.stock}</p>

      {!addedToCart ? (
        <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
      ) : (
        <button
          className="finish-purchase-button"
          onClick={handleCheckout}
        >
          Terminar compra
        </button>
      )}
    </div>
  )
}

export default ProductCard
