<template>
    <form class="todo-form">
        <input class="todo-form__input" type="text" v-model="todoValue" placeholder="Enter a new todo" />
        <button class="todo-form__button" @click.prevent="addTodo">Add Todo</button>
    </form>
</template>

<script setup>
import {ref} from 'vue';

const todoValue = ref('');
const emit = defineEmits(['addTodo']);

const addTodo = () => {
    emit('addTodo', todoValue.value);
    todoValue.value = '';
}
</script>

<style scoped>
.todo-form {
    display: flex;
    justify-content: space-between;
}
.todo-form__input {
    flex: 1;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    font-size: 1rem;
}

.todo-form__button {
    margin-left: 0.5rem;
    padding: 0.5rem;
    border: none;
    background-color: dodgerblue;
    color: white;
    border-radius: 0.25rem;
    font-size: 1rem;
}
</style>