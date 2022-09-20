// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBzQX8dVW52GcoWAuhFmj6WEdy-sUDlL8",
  authDomain: "react-js-fa56c.firebaseapp.com",
  projectId: "react-js-fa56c",
  storageBucket: "react-js-fa56c.appspot.com",
  messagingSenderId: "857504794321",
  appId: "1:857504794321:web:788e1bea42925cd3b2a7f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)