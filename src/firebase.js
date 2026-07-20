// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDS4jU4UT4YlFRncp9Fi2uvcNxBPkAQSxE",
  authDomain: "tienda-react-92755.firebaseapp.com",
  projectId: "tienda-react-92755",
  storageBucket: "tienda-react-92755.appspot.com",
  messagingSenderId: "740248854701",
  appId: "1:740248854701:web:af0acb8ca088489e6aa624"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
