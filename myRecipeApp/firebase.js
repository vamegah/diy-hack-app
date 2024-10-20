// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByvHyTPvwSD5iI9gFMeKk89eCoL3P__Ss",
  authDomain: "reactnative-push-notific-e871b.firebaseapp.com",
  projectId: "reactnative-push-notific-e871b",
  storageBucket: "reactnative-push-notific-e871b.appspot.com",
  messagingSenderId: "98427882719",
  appId: "1:98427882719:web:8a17a006cb531468eaed6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
