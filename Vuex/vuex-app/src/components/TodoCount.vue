<template>
  <div>
    <p>Yapılan: {{ todoDoneCount }}</p>
    <p>Yapılmayanlar: {{ todoNotDoneCount }}</p>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();
    const todoTotalCount = computed(() => {
      return store.getters.todoTotalCount;
    });
    const todoDoneCount = computed(() => {
      return store.getters.todoDoneCount;
    });
    const todoNotDoneCount = computed(() => {
      return store.getters.todoNotDoneCount;
    });
    return { todoDoneCount, todoNotDoneCount };
  },
};
</script>

<style></style>
