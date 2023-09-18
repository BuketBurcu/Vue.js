import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBlaSkio0HBtLcmOLVTW1m20sojWa_8b_s",
    authDomain: "vue3-982db.firebaseapp.com",
    projectId: "vue3-982db",
    storageBucket: "vue3-982db.appspot.com",
    messagingSenderId: "94759351601",
    appId: "1:94759351601:web:3add0863aca58cc7d42c10"
};

const fb = initializeApp(firebaseConfig);
export { fb };