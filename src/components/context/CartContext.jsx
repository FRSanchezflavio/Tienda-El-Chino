import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addItem = (product, quantity) => {
    const existingItem = cart.find(item => item.id === product.id)

    if (existingItem) {
      const updatedCart = cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + quantity }
          : item
      )
      setCart(updatedCart)
    } else {
      setCart([...cart, { ...product, quantity }])
    }
  }

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const clearCart = () => {
    setCart([])
  }

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0)
  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)

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

export default CartContext
