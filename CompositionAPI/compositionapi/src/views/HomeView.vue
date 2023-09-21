<template>
  <div class="home">
    <Contents :contents="contents"></Contents>

    <!-- <input type="text" v-model="search" />
    <div v-for="day in finded" :key="day">{{ day }}</div>
    <button @click="stop">Stop</button> -->
  </div>
</template>

<script>
import { ref, computed, watch, watchEffect } from "vue";
import Contents from "../components/Contents.vue";
export default {
  name: "HomeView",
  components: { Contents },
  setup() {
    const contents = ref([
      { id: 1, title: "Deneme 1", details: "Detail 1" },
      { id: 2, title: "Deneme 2", details: "Detail 2" },
      { id: 3, title: "Deneme 3", details: "Detail 3" },
      { id: 4, title: "Deneme 4", details: "Detail 4" },
    ]);
    return { contents };

    // const days = ref([
    //   "Pazartesi",
    //   "Salı",
    //   "Çarşamba",
    //   "Perşembe",
    //   "Cuma",
    //   "Cumartesi",
    //   "Pazar",
    // ]);
    // const search = ref("");
    // const finded = computed(() => {
    //   return days.value.filter((day) => day.includes(search.value));
    // });
    // const watchS = watch(search, () => {
    //   console.log("watch çalıştı.");
    // });
    // const watchEffectS = watchEffect(() => {
    //   console.log("WatchEffect Çalıştı.", days.value);
    //   console.log("WatchEffect Çalıştı.", search.value);
    // });
    // const stop = () => {
    //   watchS();
    //   watchEffectS();
    // };

    // return { days, search, finded, stop };
  },
};
</script>
