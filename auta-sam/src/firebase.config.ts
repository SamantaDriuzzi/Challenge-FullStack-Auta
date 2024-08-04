// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUR_BvPcV0qid1d1LLmfLxa72BGPOGro4",
  authDomain: "challenge-auta-sam.firebaseapp.com",
  projectId: "challenge-auta-sam",
  storageBucket: "challenge-auta-sam.appspot.com",
  messagingSenderId: "74298263831",
  appId: "1:74298263831:web:cafbd260e558ab3aeacf52",
  measurementId: "G-5MNQZLVRYP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { db, storage, auth, googleProvider };
