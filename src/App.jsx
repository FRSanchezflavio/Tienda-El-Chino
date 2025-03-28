import { useState } from 'react'
import Navbar from '../src/components/navbar/Navbar'
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer'
import ItemCount from '../src/components/ItemCount/ItemCount'
import ProductList from '../src/components/ProductList/ProductList'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <div className="container">
      <Navbar count={count} />
    <ItemCount initial={1} stock={10} onAdd={(qty) => console.log(`Agregaste ${qty} al carrito`)} />
<ProductList />
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
    </div>
  )
}

export default App
