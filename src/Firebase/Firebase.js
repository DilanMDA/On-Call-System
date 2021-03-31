import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"; // <- needed if using firestore

// const config = {
//   apiKey: process.env.REACT_APP_APIKEY,
//   authDomain: "todos-auth-d4fc1.firebaseapp.com",
//   databaseURL: "https://todos-auth-d4fc1-default-rtdb.firebaseio.com",
//   projectId: "todos-auth-d4fc1",
//   storageBucket: "todos-auth-d4fc1.appspot.com",
//   messagingSenderId: "185317362280",
//   appId: "1:185317362280:web:5db97266268cb689bdc9dd",
//   measurementId: "G-7KLZTSTHC7",
// };

// //intialize firebase
// firebase.initializeApp(config);
// firebase.firestore();

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: "on-call-system.firebaseapp.com",
  projectId: "on-call-system",
  storageBucket: "on-call-system.appspot.com",
  messagingSenderId: "818139719058",
  appId: "1:818139719058:web:40a730dbf7614f80e74d4b",
  measurementId: "G-J6F1NK9ZY0",
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore();

export default firebase;
