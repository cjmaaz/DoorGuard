
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "-",
    authDomain: "-",
    projectId: "-",
    storageBucket: "-",
    messagingSenderId: "862316402101",
    appId: "-",
    measurementId: "-"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };