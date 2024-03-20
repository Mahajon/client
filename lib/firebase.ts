// Import the functions you need from the SDKs you need

import { getAnalytics } from "firebase/analytics"
import { getApp, getApps, initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCV88DV8Ln9BtX6VgN8fx12Ju3qn8gHlSI",
  authDomain: "dokan0.firebaseapp.com",
  projectId: "dokan0",
  storageBucket: "dokan0.appspot.com",
  messagingSenderId: "987774306294",
  appId: "1:987774306294:web:961f2baccda47d7246e9d7",
  measurementId: "G-XXHPQMCN4B",
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const auth = getAuth(app)
const firestore = getFirestore(app)

export { app, auth, firestore }
