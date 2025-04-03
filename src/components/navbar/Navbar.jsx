// src/components/navbar/Navbar.jsx
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import CartWidget from '../cartWidget/CartWidget'
import { CartContext } from '../context/CartContext'


function Navbar() {
  const { totalQuantity } = useContext(CartContext)

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">EL CHINO</Link>
      </div>

      <ul className="nav-links">
        <li><Link className="nav-link" to="/cervezas">Cervezas</Link></li>
        <li><Link className="nav-link" to="/vinos">Vinos</Link></li>
        <li><Link className="nav-link" to="/licores">Licores</Link></li>
        <li><Link className="nav-link" to="/sin-alcohol">Sin Alcohol</Link></li>
      </ul>

      <div className="navbar-right">
        <input type="text" placeholder="Buscar bebidas..." className="search-input" />
        <button className="search-button">Buscar</button>
        <button className="session-button">Iniciar Sesión</button>

        {/* Enlace que redirige al carrito */}
        <Link className="cart-button" to="/cart">
          <CartWidget count={totalQuantity}/>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
