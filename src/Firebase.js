// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhwISN6kwhX8yKSyYeAI48lrB2d2_ZZQU",
  authDomain: "edu-zen.firebaseapp.com",
  projectId: "edu-zen",
  storageBucket: "edu-zen.appspot.com",
  messagingSenderId: "392189948380",
  appId: "1:392189948380:web:ec351292eea527aff99f19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }
