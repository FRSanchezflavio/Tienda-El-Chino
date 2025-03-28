// src/components/ProductList.jsx
import React, { useEffect, useState } from 'react'
import { getProducts } from '../../data/mockProducts'
import ProductCard from '../ProductCard/ProductCard'
import './ProductList.css'

function ProductList() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts().then(data => setProducts(data))
  }, [])

  return (
    <section className="product-list">
      <h2>Catálogo de Productos</h2>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default ProductList
