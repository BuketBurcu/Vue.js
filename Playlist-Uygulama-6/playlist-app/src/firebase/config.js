import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAP64vC9vGBW2kMa8kslhE0kRptRaEX7Cg",
    authDomain: "playlist-vue-8f4f5.firebaseapp.com",
    projectId: "playlist-vue-8f4f5",
    storageBucket: "playlist-vue-8f4f5.appspot.com",
    messagingSenderId: "847318965963",
    appId: "1:847318965963:web:6dbe59b8a6a1070f5ec54e"
  };
firebase.initializeApp(firebaseConfig)

const projectFileStore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFileStore, projectAuth, timestamp , projectStorage}
