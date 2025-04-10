import React, { useState } from 'react'
import './ItemCount.css'

function ItemCount({ initial = 1, stock = 10, onAdd }) {
  const [count, setCount] = useState(initial)

  const increment = () => {
    if (count < stock) setCount(count + 1)
  }

  const decrement = () => {
    if (count > 1) setCount(count - 1)
  }

  const handleAddToCart = () => {
    onAdd(count)
  }

  return (
    <div className="item-count-container">
      <div className="counter-controls">
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
      <button className="add-to-cart-button" onClick={handleAddToCart}>
        Agregar al carrito
      </button>
    </div>
  )
}

export default ItemCount
