// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW5D7Il7Qp03MkX9HCZjIyTct3OmDDrB0",
  authDomain: "wedding-invite-a4cf5.firebaseapp.com",
  projectId: "wedding-invite-a4cf5",
  storageBucket: "wedding-invite-a4cf5.firebasestorage.app",
  messagingSenderId: "934845709006",
  appId: "1:934845709006:web:97466c86042efc99bbae9f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
