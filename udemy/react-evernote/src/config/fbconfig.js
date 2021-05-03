import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCONy7s1I7Kg2bWAu-ivE-THWhvZU1yv00",
  authDomain: "evernote-clone-313c7.firebaseapp.com",
  projectId: "evernote-clone-313c7",
  storageBucket: "evernote-clone-313c7.appspot.com",
  messagingSenderId: "568961162640",
  appId: "1:568961162640:web:48ca6ae998bacf7b942715",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
