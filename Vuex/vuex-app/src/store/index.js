import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      { id: 1, todo: "ders çaliş", done: false },
      { id: 2, todo: "film izle", done: true },
      { id: 3, todo: "dizi izle", done: false },
      { id: 4, todo: "koşu yap", done: true }
    ]
  },
  getters: {
    todoTotalCount(state) {
      return state.todos.length
    },
    todoDoneCount(state) {
      return state.todos.filter(x => done == true).length
    },
    todoNotDoneCount(state) {
      return state.todos.filter(x => x.done == false).length
    },
  },
  mutations: {
    addTodo(state, { newTodo, done }) {
      let todo = {
        id: Math.floor(Math.random() * 10000000),
        todo: todo,
        done: done,
      };
      state.todos.push(todo);

    }
  },
  actions: {
    addTodoAction(contex, todoObject) {
      contex.commit("addTodo", todoObject);
    }
  },
  modules: {
  }
})
