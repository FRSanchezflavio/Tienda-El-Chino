import React from 'react'
import './Navbar.css'
import CartWidget from '../cartWidget/CartWidget'

function Navbar({ count }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo">EL CHINO</h1>
      </div>

      <ul className="nav-links">
        <li><a className="nav-link" href="/cervezas">Cervezas</a></li>
        <li><a className="nav-link" href="/vinos">Vinos</a></li>
        <li><a className="nav-link" href="/licores">Licores</a></li>
        <li><a className="nav-link" href="/sin-alcohol">Sin Alcohol</a></li>
      </ul>

      <div className="navbar-right">
        <input
          type="text"
          placeholder="Buscar bebidas..."
          className="search-input"
        />
        <button className="search-button">Buscar</button>
        <button className="session-button">Iniciar Sesión</button>
        <button className="cart-button">
          <CartWidget count={count} />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
