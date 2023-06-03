import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
  const todos = ref([])
  const addTodo = (todo) => {
    todos.value.unshift(todo)
    localStorage.setItem('todos', JSON.stringify(todos.value))
  }

  const removeTodo = (todoText) => {
    todos.value = todos.value.filter((todo) => todo !== todoText)
    localStorage.setItem('todos', JSON.stringify(todos.value))
  }

  const setTodos = (todos) => {
    todos.value = todos
  }

  return {todos, addTodo, removeTodo, setTodos}
})
