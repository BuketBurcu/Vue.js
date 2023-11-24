//Burası config bilgieri dışında kendimizin yazdığı kısımlar 
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBztUnoR0PvvhfHF3bZwD1u-mCMM3ajBOo",
  authDomain: "fikir-bulutu-e9611.firebaseapp.com",
  projectId: "fikir-bulutu-e9611",
  storageBucket: "fikir-bulutu-e9611.appspot.com",
  messagingSenderId: "790391217865",
  appId: "1:790391217865:web:0d8a51d28b38bfa75ff718",
  measurementId: "G-J8MS5KXG3C"
};

firebase.initializeApp(firebaseConfig);

const firebaseRef=firebase.firestore;
const authRef = firebase.auth();


export {firestoreRef, authRef};