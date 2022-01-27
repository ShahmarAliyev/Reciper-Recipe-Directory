import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBp0GmKUnRjtJG__iTPLV27TfCFlQSZWbg",
  authDomain: "rocket-kitchen-3f498.firebaseapp.com",
  projectId: "rocket-kitchen-3f498",
  storageBucket: "rocket-kitchen-3f498.appspot.com",
  messagingSenderId: "29279221918",
  appId: "1:29279221918:web:c32f2e36fe852c83e6238f",
};

//initilize firebase

firebase.initializeApp(firebaseConfig);

//init services

const projectFirestore = firebase.firestore();

export { projectFirestore };
