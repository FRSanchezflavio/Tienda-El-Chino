// src/components/ProductCard.jsx
import React from 'react'
import './ProductCard.css'

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
      <p>Stock: {product.stock}</p>
      <button>Agregar al carrito</button>
    </div>
  )
}

export default ProductCard
