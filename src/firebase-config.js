// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAT-H87tuqyoqGgaFHF49IkXfO-1n4Du4E",
  authDomain: "octane-8e3cb.firebaseapp.com",
  projectId: "octane-8e3cb",
  storageBucket: "octane-8e3cb.firebasestorage.app",
  messagingSenderId: "132270556138",
  appId: "1:132270556138:web:60ed2f44edfc407ea6e893",
  measurementId: "G-2R5YE2XZK6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);