// src/components/Navbar.jsx
import React from 'react'
import CartWidget from '../cartWidget/CartWidget'  // Importa el componente
import './Navbar.css' // O tus estilos inline

function Navbar() {
  return (
    <nav className="nav">
      {/* LOGO o NOMBRE DE LA TIENDA */}
      <div className="logo-container">
        <h1 className="logo">EL CHINO</h1>
        <span className="subTitle">Tienda de Bebidas</span>
      </div>

      {/* MENÚ DE NAVEGACIÓN */}
      <ul className="nav-menu">
        <li><a href="/cervezas">Cervezas</a></li>
        <li><a href="/vinos">Vinos</a></li>
        <li><a href="/licores">Licores</a></li>
        <li><a href="/sin-alcohol">Sin Alcohol</a></li>
      </ul>

      {/* BARRA DE BÚSQUEDA */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar bebidas..."
          className="search-input"
        />
        <button className="search-button">Buscar</button>
      </div>

      {/* BOTONES DE SESIÓN Y CARRITO */}
      <div className="button-container">
        <button className="session-button">Iniciar Sesión</button>

        {/* Aquí colocas el CartWidget, pasándole, por ejemplo, la cantidad de ítems */}
        <CartWidget count={3} />
      </div>
    </nav>
  )
}

export default Navbar
