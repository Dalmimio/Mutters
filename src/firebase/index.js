// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA49X4LVHFJeFvpHgxrJkfbqFouuqGJpEQ",
  authDomain: "tpfinal-1.firebaseapp.com",
  projectId: "tpfinal-1",
  storageBucket: "tpfinal-1.appspot.com",
  messagingSenderId: "126617860402",
  appId: "1:126617860402:web:be21233b55397b4041ff2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app }