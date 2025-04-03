// src/context/CartContext.jsx
import { createContext, useState } from 'react'

// 1) Creamos el contexto
export const CartContext = createContext()

// 2) Creamos el componente proveedor, que envuelve la app y comparte el estado
export function CartProvider({ children }) {
  // Aquí podemos almacenar los productos en un array, un conteo global, o ambos.
  const [cart, setCart] = useState([])

  // Ejemplo: Agregar un producto con su cantidad
  const addItem = (product, quantity) => {
    // Verificamos si el producto ya está en el carrito
    const existingItem = cart.find(item => item.id === product.id)

    if (existingItem) {
      // Actualizamos la cantidad
      const updatedCart = cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + quantity }
          : item
      )
      setCart(updatedCart)
    } else {
      // Agregamos el producto con su cantidad
      setCart([...cart, { ...product, quantity }])
    }
  }

  // Podés agregar más métodos: removeItem, clearCart, etc.
  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const clearCart = () => {
    setCart([])
  }

  // Cantidad total de ítems en el carrito (para mostrar en el widget)
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0)
  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)

  // 3) Devolvemos el Provider, que hace disponible el valor a los children
  return (
    <CartContext.Provider 
      value={{ 
        cart, 
        addItem, 
        removeItem, 
        clearCart, 
        totalQuantity,
        totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

// 4) Exportamos el contexto para usarlo en otros componentes
export default CartContext
// src/context/CartContext.jsx