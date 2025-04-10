import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ProductList from './components/ProductList/ProductList'
import Cart from '../src/components/Cart/Cart'
import OrderConfirmation from './components/OrderConfirmation/OrderConfirmation'
<<<<<<< HEAD
import ProductDetail from './components/ProductDetail/ProductDetail'
=======
>>>>>>> 31ddb7cf6752f65e34527af92e26c16e9b8cb8c0


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
        <Route 
          path="/detail/:id" 
          element={<ProductDetail />} 
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
      </Routes>
    </div>
  )
}

export default App
