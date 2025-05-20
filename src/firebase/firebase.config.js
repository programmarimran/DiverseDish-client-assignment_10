// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnC6dfAOgFXBchJ771ufJNQ2iUMXmgpLU",
  authDomain: "diverse-dish-by-imran.firebaseapp.com",
  projectId: "diverse-dish-by-imran",
  storageBucket: "diverse-dish-by-imran.firebasestorage.app",
  messagingSenderId: "536252982902",
  appId: "1:536252982902:web:6004bba275bda2b9af6157"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
