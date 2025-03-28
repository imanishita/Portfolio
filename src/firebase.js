// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGhP_xfPtZGaLHsE5v4iahHz8KsRtBwRY",
  authDomain: "myportfolio-c7094.firebaseapp.com",
  projectId: "myportfolio-c7094",
  storageBucket: "myportfolio-c7094.appspot.com",
  messagingSenderId: "458978882118",
  appId: "1:458978882118:web:00c3483060966824379047",
  measurementId: "G-0HRG80KB4W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // Firestore database instance


