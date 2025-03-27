// src/App.jsx
import { useState } from 'react'
import Navbar from '../src/components/navbar/Navbar' // Ajusta la ruta si es necesario
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer' // Ajusta la ruta si es necesario
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      
      {/* Contenedor de productos (ItemListContainer) */}
      <ItemListContainer greeting="¡Bienvenido a EL CHINO - Tienda de Bebidas!" />
      <div style={{ padding: '1rem' }}>
        <h2>Esta es la sección principal</h2>
        <button onClick={() => setCount(count + 1)}>
          Sumar: {count}
        </button>
      </div>
      {/* Aquí va el contenido principal de tu E-Commerce */}
      <div style={{ padding: '1rem' }}>
        <h2>¡Bienvenido a la tienda EL CHINO!</h2>
        <button onClick={() => setCount((prev) => prev + 1)}>
          Sumar: {count}
        </button>
      </div>
    </>
  )
}

export default App
