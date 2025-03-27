import React from 'react'
// Si instalaste react-icons, importamos un ícono de carrito:
import { FaShoppingCart } from 'react-icons/fa'

function CartWidget({ count = 0 }) {
  return (
    <div style={styles.container}>
      {/* Ícono de carrito */}
      <FaShoppingCart style={styles.icon} />
      {/* Contador de items. Si count es mayor que 0, muestra el número. */}
      {count > 0 && (
        <span style={styles.badge}>{count}</span>
      )}
    </div>
  )
}

const styles = {
  container: {
    position: 'relative',
    cursor: 'pointer',
  },
  icon: {
    fontSize: '24px',
  },
  badge: {
    position: 'absolute',
    top: '-8px',
    right: '-10px',
    backgroundColor: 'red',
    color: '#fff',
    borderRadius: '50%',
    padding: '2px 6px',
    fontSize: '0.8rem',
    fontWeight: 'bold',
  },
}

export default CartWidget
