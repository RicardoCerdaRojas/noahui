// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_KEY,
	authDomain: "noahdb-22238.firebaseapp.com",
	projectId: "noahdb-22238",
	storageBucket: "noahdb-22238.appspot.com",
	messagingSenderId: "345981838453",
	appId: "1:345981838453:web:6ef113ac81d30f7814c43c",
	measurementId: "G-P62NHM4K5Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage();
