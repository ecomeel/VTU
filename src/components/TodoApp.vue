<template>
  <div>
    <div
      v-for="(todo, index) in todos"
      :key="index"
      data-test="todo"
      :class="todo.completed ? 'completed' : ''"
    >
      {{ todo.text }}
      <input
        type="checkbox"
        v-model="todo.completed"
        data-test="todo-checkbox"
      />
    </div>

    <form data-test="form" @submit.prevent="createTodo">
      <input data-test="new-todo" v-model="newTodo" />
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const todos = ref([
  {
    id: 1,
    text: "Learn Vue3.ks testing",
    completed: false,
  },
]);

const newTodo = ref("");

function createTodo() {
  todos.value.push({
    id: todos.value.length + 1,
    text: newTodo,
    completed: false,
  });
}
</script>

<style></style>
