// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAkp5AGftZn3qSLLBlFUMfJaCNq_h0nbY",
  authDomain: "reachat-a82a4.firebaseapp.com",
  projectId: "reachat-a82a4",
  storageBucket: "reachat-a82a4.firebasestorage.app",
  messagingSenderId: "504970529214",
  appId: "1:504970529214:web:c4daa9df2d24ae71ed91ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);