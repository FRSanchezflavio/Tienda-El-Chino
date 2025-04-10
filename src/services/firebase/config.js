import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAeRYRd9iK6q3a4wbSinhbevJ5rengEFY",
  authDomain: "tienda-el-chino.firebaseapp.com",
  projectId: "tienda-el-chino",
  storageBucket: "tienda-el-chino.firebasestorage.app",
  messagingSenderId: "992081840101",
  appId: "1:992081840101:web:7d809e9ef8a44f5f99110c",
  measurementId: "G-WWE4BLYZBN"
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);