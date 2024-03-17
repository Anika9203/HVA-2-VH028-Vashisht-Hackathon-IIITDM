// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhwISN6kwhX8yKSyYeAI48lrB2d2_ZZQU",
  authDomain: "edu-zen.firebaseapp.com",
  projectId: "edu-zen",
  storageBucket: "edu-zen.appspot.com",
  messagingSenderId: "392189948380",
  appId: "1:392189948380:web:ec351292eea527aff99f19",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth()

export function useAuth() {
  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user))
    return unsub
  }, [])

  return currentUser
}

export { db }