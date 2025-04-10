import React, { useEffect, useState } from 'react'
import { getProducts } from '../../services/firebase/products'
import ProductCard from '../ProductCard/ProductCard'
import './ProductList.css'

function ProductList() {
  const [products, setProducts] = useState([])

  useEffect(() => {
  getProducts()
    .then(data => {setProducts(data)})
    .catch(error => {console.error("Error al obtener productos:", error)})
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
