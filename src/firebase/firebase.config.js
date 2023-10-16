// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLk-jdpunMg0A26OhtC0gu6adInvcy-Ro",
  authDomain: "online-coffee-store.firebaseapp.com",
  projectId: "online-coffee-store",
  storageBucket: "online-coffee-store.appspot.com",
  messagingSenderId: "766542202232",
  appId: "1:766542202232:web:2a9d6af13151c0a76c748d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;