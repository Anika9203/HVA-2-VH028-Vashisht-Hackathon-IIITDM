// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB78zNPZmf_iEsrBJ7TsE0AKKHjvlx-U70",
  authDomain: "lms-platform-735f3.firebaseapp.com",
  projectId: "lms-platform-735f3",
  storageBucket: "lms-platform-735f3.appspot.com",
  messagingSenderId: "534622340567",
  appId: "1:534622340567:web:b50699058188f3c607b792",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
