<template>
  <div class="home">
    <List />
    <AddTodo />
    <TodoCount/>
  </div>
</template>

<script>
import { ref, onUpdated } from "vue";
import List from "../components/List.vue";
import TodoCount from "../components/TodoCount.vue";
import AddTodo from "../components/AddTodo.vue";
import { useRoute } from "vue-router";
export default {
  name: "Home",
  components: { List, AddTodo,TodoCount },
  setup() {},
};
</script>
