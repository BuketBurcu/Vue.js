<template>
  <div class="home">
    <h2>Firebase</h2>
  </div>
</template>

<script>
import { onMounted } from "vue";
import {
  getFirestore,
  get,
  collection,
  getDoc,
  deleteDoc,
  doc,
  query,
  where,
  onSnapshot,
  updateDoc,
} from "firebase/firestore/lite";
import { fb } from "../firebase/config.js";

export default {
  name: "HomeView",
  components: {},
  setup() {
    onMounted(async () => {
      const db = getFirestore(fb);
      const fbRef = collection(db, "books");
      const fbDocs = await getDoc(fbRef);
      const data = fbDocs.docs.map((doc) => doc.data());
      const docID = fbDocs.docs.map((doc) => doc.id);
      // console.log(docID);
      // console.log(data);

      // addDoc(fbRef, {
      //   name: "Sokrates'in Savunması",
      //   author: "Platon",
      //   pageCount: 688,
      // });

      // const docRef = doc(db, "books", "VzZUX4ZK4K5xvjvBFg26");
      // deleteDoc(docRef);

      const q = query(fbRef, where("pageCount", "==", 200));
      onSnapshot(fbRef, (ss) => {
        let books = [];
        ss.docs.forEach((doc) => {
          books.push({ ...doc.data(), id: doc.id });
        });
        console.log(books);
      });

      const docRef = doc(db, "books", "CyA1z237YD5yZ4YoUTRx");
      updateDoc(docRef, {
        pageCount: 400,
      });

      return data;
    });
  },
};
</script>
