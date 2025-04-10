import React from 'react'
import './ItemListContainer.css'

function ItemListContainer({ greeting }) {
  return (
    <section className="item-list-container">
      <h2 className="item-list-title">{greeting}</h2>
      <div className="items-container">
        <p className="item-placeholder">¡Aquí se mostrará la lista de productos!</p>
      </div>
    </section>
  )
}

export default ItemListContainer
