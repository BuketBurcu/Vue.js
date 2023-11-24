import { ref } from "vue";
import { firestoreRef } from "../firebase/config";
import { collection } from "firebase/firestore";

const belgelerGetir = (collection) => {
    const documents = ref(null);
    const error = ref(null);

    let collectionRef = firestoreRef.collection(collection);

    collectionRef.onSnapshot(snap => {
        let result = [];

        snap.docs.forEach(doc => {
            results.push({ ...doc.data(), id: doc.id })
        })

        documents.value = result;
        error.value = null;
    }, err => {
        console.log(err.message);
        documents.value = null;
        error.value = "Verilere Erişilemedi"
    })
    return { error, documents, }
}

export deafult belgelerGetir;