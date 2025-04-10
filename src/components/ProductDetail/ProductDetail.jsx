import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../data/mockProducts'
import './ProductDetail.css'

function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    getProducts().then(data => {
      const found = data.find(p => p.id === parseInt(id))
      setProduct(found)
    })
  }, [id])

  if (!product) return <p>Cargando producto...</p>

  return (
    <div className="product-detail">
      <img src={product.img} alt={product.name} />
      <h2>{product.name}</h2>
      <p><strong>Marca:</strong> {product.brand}</p>
      <p><strong>Categoría:</strong> {product.category}</p>
      <p><strong>Descripción:</strong> {product.description}</p>
      <p><strong>Precio:</strong> ${product.price}</p>
      <p><strong>Stock:</strong> {product.stock}</p>
    </div>
  )
}

export default ProductDetail
