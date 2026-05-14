import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCmLXyMtaYy8Hb034boL5WBIDq1yDO7po4",
  authDomain: "react-project-3be2e.firebaseapp.com",
  projectId: "react-project-3be2e",
  storageBucket: "react-project-3be2e.firebasestorage.app",
  messagingSenderId: "12032635401",
  appId: "1:12032635401:web:1c9871de9d480b97b03ed8",
  measurementId: "G-4141H4EQMV"
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

// EXPORT AUTH
export const auth = getAuth(app);