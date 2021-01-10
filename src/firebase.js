import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAPISQHj8AJNxDeMWrH0GKg3H1cryvSwTA",
  authDomain: "clone-ca006.firebaseapp.com",
  projectId: "clone-ca006",
  storageBucket: "clone-ca006.appspot.com",
  messagingSenderId: "361587793181",
  appId: "1:361587793181:web:5d35b51e10a0ec72b995f4",
  measurementId: "G-42ELFGQJ5R"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
