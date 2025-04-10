import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import ItemCount from '../itemCount/ItemCount'
import './ProductCard.css'

function ProductCard({ product }) {
  const [addedToCart, setAddedToCart] = useState(false)
  const navigate = useNavigate()
  const { addItem } = useContext(CartContext)

  const handleAdd = (qty) => {
    addItem(product, qty)
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
