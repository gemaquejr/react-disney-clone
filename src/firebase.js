import firebase from "firebase";

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
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

