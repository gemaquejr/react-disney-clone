import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA82_GpfFFViHVrptIz-tIF9tgBrXGbUx8",
  authDomain: "react-disney-clone-837b1.firebaseapp.com",
  projectId: "react-disney-clone-837b1",
  storageBucket: "react-disney-clone-837b1.appspot.com",
  messagingSenderId: "1068021290144",
  appId: "1:1068021290144:web:0d5a468cc654fe67e465c5",
  measurementId: "G-ZWWT1C874S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

const signInWithGoogle = () => signInWithPopup(auth, provider);

export { app, auth, provider, storage, signInWithGoogle };
export default db;

