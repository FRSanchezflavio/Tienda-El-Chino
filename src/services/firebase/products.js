import { collection, getDocs } from 'firebase/firestore'
import { db } from './config.js'

export async function getProducts() {
  const productsRef = collection(db, "products")  
  const snapshot = await getDocs(productsRef)     
  
  const productsAdapted = snapshot.docs.map(doc => {
    const data = doc.data()
    return { id: doc.id, ...data }
  })
  
  return productsAdapted
}
