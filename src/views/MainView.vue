<script setup>
import TodoForm from '../components/TodoForm.vue';
import TodoItem from '../components/TodoItem.vue';
import { useMainStore } from '../stores/main';
import { onMounted } from 'vue';
import {storeToRefs} from 'pinia'

const { addTodo, removeTodo } = useMainStore();

const { todos } = storeToRefs(useMainStore());

const onAddTodo = (todo) => {
  addTodo(todo);
}

const onMarkAsDone = (todoText) => {
  removeTodo(todoText)
}

onMounted(() => {
  const todosFromLocalStorage = localStorage.getItem('todos');
  if (todosFromLocalStorage) {
    todos.value = JSON.parse(todosFromLocalStorage);
  }
});
</script>

<template>
  <main>
    <div class="container">
      <h1 class="main-header">My Todo List</h1>
      <TodoForm @add-todo="onAddTodo"/>
      <TodoItem @mark-as-done="onMarkAsDone" v-for="todo in todos" :key="todo" :todo-text="todo"/>
    </div>
  </main>
</template>

<style scoped>
.main-header {
  margin-bottom: 2rem;
}
</style>