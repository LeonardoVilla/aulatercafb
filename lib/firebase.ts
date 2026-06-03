import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjf0kSLQ7cH5jVzyPtlz2x1V1HCLFkcVI",
  authDomain: "aulaterca-c9896.firebaseapp.com",
  databaseURL: "https://aulaterca-c9896.firebaseio.com",
  projectId: "aulaterca-c9896",
  storageBucket: "aulaterca-c9896.firebasestorage.app",
  messagingSenderId: "28761662823",
  appId: "1:28761662823:web:b0923abcf0059994ed7bc2",
  measurementId: "G-GFBJR78J3F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;