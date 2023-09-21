import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyClHSmdQYnPnD4kIWRCMZCKRJr0Z_Jd3XA",
    authDomain: "blog-vue3-b9f31.firebaseapp.com",
    projectId: "blog-vue3-b9f31",
    storageBucket: "blog-vue3-b9f31.appspot.com",
    messagingSenderId: "1074545385501",
    appId: "1:1074545385501:web:fea44bf31ae562d17366f4"
};
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };
