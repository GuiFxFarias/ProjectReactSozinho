// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkNv1ZoISTdZmmUeMEdbF_GY64gwowZ-U",
  authDomain: "projetotibia-68cbe.firebaseapp.com",
  projectId: "projetotibia-68cbe",
  storageBucket: "projetotibia-68cbe.appspot.com",
  messagingSenderId: "149859109801",
  appId: "1:149859109801:web:55d356887f1ff99c8d52b8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
