// src/data/mockProducts.js

const products = [
  { id: 1, name: "Cerveza Artesanal", price: 1200, stock: 15, img: "/img/cerveza.jpg" },
  { id: 2, name: "Vino Malbec", price: 2500, stock: 8, img: "/img/vino.jpg" },
  { id: 3, name: "Fernet Branca", price: 1800, stock: 20, img: "/img/fernet.jpg" },
]

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 1000) // Simula carga asincrónica
  })
}
