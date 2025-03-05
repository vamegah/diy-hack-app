// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from 'firebase/firestore';
// Uncomment the below line if you want to try the app with Firebase app storage
// You must have upgraded your Firebae account to use this
// import { getStorage } from 'firebase/storage';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCemUlU1QxwZdv1YhUXq2Yf_rt_ihGpqkY",
  authDomain: "flutter--analytics-app.firebaseapp.com",
  projectId: "flutter--analytics-app",
  storageBucket: "flutter--analytics-app.firebasestorage.app",
  messagingSenderId: "704528738332",
  appId: "1:704528738332:web:e0689ac06419b4e39d97d9",
  measurementId: "G-YWLL4CH6QW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// Uncomment the below line if you are trying the app with Firebase app storage
// export const storage = getStorage(app);
