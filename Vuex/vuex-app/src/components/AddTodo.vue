<template>
  <form @submit.prevent="addTodo">
    <input type="text" placeholder="Todo Ekle" v-model="todo">
    <button>Ekle</button>
  </form>
</template>

<script>
import {ref} from "vue";
import {useStore} from "vue-router";
export default {
    setup(){
        const store=useStore();
        const todo=ref("");
        const addTodo=()=>{
          const newTodo={
            todo:todo.value,
            done:true,
          };
           store.dispatch('addTodoAction',newTodo);
        }
        return {todo, addTodo};
    }
}
</script>

<style>

</style>