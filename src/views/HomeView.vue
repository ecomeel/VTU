<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <TodoApp />
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import TodoApp from "@/components/TodoApp.vue";

@Options({
  components: {
    TodoApp,
  },
})
export default class HomeView extends Vue {}
</script>
