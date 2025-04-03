// src/App.jsx
import React from 'react'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ProductList from './components/ProductList/ProductList'
import Cart from '../src/components/Cart/Cart'


function App() {
  const [cartCount, setCartCount] = useState(0)

  const handleAddToCart = (quantity) => {
    setCartCount(prev => prev + quantity)
  }
  return (
    <div className="container">
      <Navbar />
      
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <ItemListContainer greeting="¡Bienvenido a EL CHINO - Tienda de Bebidas!" />
              <ProductList />
            </>
          } 
        />
        {/* Otras rutas, por ejemplo la del carrito */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
