// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBV6XJO1WhNY21EZkKYL0esaTPtyXqRNp8",
  authDomain: "blog-723c1.firebaseapp.com",
  projectId: "blog-723c1",
  storageBucket: "blog-723c1.firebasestorage.app",
  messagingSenderId: "497769055956",
  appId: "1:497769055956:web:28ec53d0fab8f649ab5d41",
  measurementId: "G-CB4J5KE4MF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);


// ✅ Export db
export { db };