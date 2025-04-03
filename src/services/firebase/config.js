// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAeRYRd9iK6q3a4wbSinhbevJ5rengEFY",
  authDomain: "tienda-el-chino.firebaseapp.com",
  projectId: "tienda-el-chino",
  storageBucket: "tienda-el-chino.firebasestorage.app",
  messagingSenderId: "992081840101",
  appId: "1:992081840101:web:7d809e9ef8a44f5f99110c",
  measurementId: "G-WWE4BLYZBN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);