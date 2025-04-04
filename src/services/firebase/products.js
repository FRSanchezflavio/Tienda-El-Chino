// src/services/firebase/products.js
import { collection, getDocs } from 'firebase/firestore'
import { db } from './config.js'

// Función para obtener todos los productos
export async function getProducts() {
  const productsRef = collection(db, "products")  // Referencia a la colección
  const snapshot = await getDocs(productsRef)     // Hacemos la consulta
  
  // Transformamos el snapshot en un array de objetos con id + data()
  const productsAdapted = snapshot.docs.map(doc => {
    const data = doc.data()
    return { id: doc.id, ...data }
  })
  
  return productsAdapted
}
