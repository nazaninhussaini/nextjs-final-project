// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8waMlblRpb8ZbKfaVNWjHrl9T7cUU9hU",
  authDomain: "next-final-project-b2391.firebaseapp.com",
  projectId: "next-final-project-b2391",
  storageBucket: "next-final-project-b2391.firebasestorage.app",
  messagingSenderId: "335260038918",
  appId: "1:335260038918:web:ef997d66277e5471301087",
  measurementId: "G-F97J1C3VT7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const auth = getAuth(app);