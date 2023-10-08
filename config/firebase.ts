import React, { useState, useEffect } from 'react'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAu2UGa0_LNt0WNhMs3OCZOB2zaVPdFR-c',
  authDomain: 'tutorplus-uk.firebaseapp.com',
  projectId: 'tutorplus-uk',
  storageBucket: 'tutorplus-uk.appspot.com',
  messagingSenderId: '510090881894',
  appId: '1:510090881894:web:3ba6973c581deafd5276a7',
  measurementId: 'G-E82M4MZ4QD'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
// const analytics = getAnalytics(app)

// Global Firebase Logged In Hook
// export const useLoggedIn = () => {
//   const [loggedIn, setLoggedIn] = useState(false)

//   const updateLoggedIn = (newState) => {
//     setLoggedIn(newState)
//   }

//   return [loggedIn, updateLoggedIn]
// }
