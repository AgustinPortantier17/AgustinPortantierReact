import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAewXmJQFGylZ2WBGlhTNe9x88nsKHHb-M",
  authDomain: "ecommerce-88020-50adc.firebaseapp.com",
  projectId: "ecommerce-88020-50adc",
  storageBucket: "ecommerce-88020-50adc.firebasestorage.app",
  messagingSenderId: "1058985675789",
  appId: "1:1058985675789:web:ac63706fa6aa4fc7ba1944",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;
