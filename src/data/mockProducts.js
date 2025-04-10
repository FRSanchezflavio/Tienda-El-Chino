
const products = [
  {
    id: 1,
    name: "Cerveza Artesanal",
    price: 1200,
    stock: 15,
    category: "Cervezas",
    brand: "Patagonia",
    description: "Cerveza rubia artesanal con notas frutales y amargas.",
    img: "/img/cerveza.jpg"
  },
  {
    id: 2,
    name: "Vino Malbec",
    price: 2500,
    stock: 8,
    category: "Vinos",
    brand: "Trapiche",
    description: "Vino tinto Malbec con cuerpo, ideal para carnes rojas.",
    img: "/img/vino.jpg"
  },
  {
    id: 3,
    name: "Fernet Branca",
    price: 1800,
    stock: 20,
    category: "Licores",
    brand: "Branca",
    description: "El clásico Fernet italiano, perfecto para mezclar con cola.",
    img: "/img/fernet.jpg"
  }
]

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 1000)
  })
}
