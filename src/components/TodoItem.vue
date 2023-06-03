<template>
    <div class="todo-item">
        <p>{{ todoText }}</p>
        <button class="todo-item__button" @click="onDone">Done</button>
    </div>
</template>

<script setup>
const props = defineProps(['todoText'])
const emit = defineEmits(['mark-as-done'])

const onDone = () => {
    emit('mark-as-done', props.todoText)
}
</script>

<style scoped>
.todo-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
}

.todo-item__button {
    padding: 0.5rem;
    border: none;
    background-color: dodgerblue;
    color: white;
    border-radius: 0.25rem;
    font-size: 1rem;
    cursor: pointer;
}
</style>