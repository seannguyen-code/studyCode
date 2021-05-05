import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyB9ksnKn56Zk13rXojP69x8rOFQ6cbEtMk",
  authDomain: "react-firebase-authentic-96800.firebaseapp.com",
  projectId: "react-firebase-authentic-96800",
  storageBucket: "react-firebase-authentic-96800.appspot.com",
  messagingSenderId: "689021973453",
  appId: "1:689021973453:web:11000062ed2e38576bca84",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { auth };
export default db;
