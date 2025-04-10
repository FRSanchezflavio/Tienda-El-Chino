import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "./config";

export async function createOrder(orderData) {
  const ordersRef = collection(db, "orders");
  const newOrder = await addDoc(ordersRef, {
    ...orderData,
    date: Timestamp.fromDate(new Date()) 
  });
  return newOrder.id;
}
