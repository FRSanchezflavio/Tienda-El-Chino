// src/services/firebase/orders.js
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "./config";

// orderData podría contener { items, buyer, total, date, etc. }
export async function createOrder(orderData) {
  const ordersRef = collection(db, "orders");
  const newOrder = await addDoc(ordersRef, {
    ...orderData,
    date: Timestamp.fromDate(new Date()) // Guardamos la marca de tiempo de Firebase
  });
  return newOrder.id; // Retornamos el ID de la orden generada
}
