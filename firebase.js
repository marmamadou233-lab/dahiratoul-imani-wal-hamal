import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBgPHYlY14j_4nA1Az6aUXcJ5RKDTivk3w",
  authDomain: "dahiratoul-imani-wal-hamal.firebaseapp.com",
  projectId: "dahiratoul-imani-wal-hamal",
  storageBucket: "dahiratoul-imani-wal-hamal.firebasestorage.app",
  messagingSenderId: "744325643903",
  appId: "1:744325643903:web:35be72376f7d6de578094a",
  measurementId: "G-XL626J35BP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };