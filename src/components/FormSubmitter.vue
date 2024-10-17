<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input v-model="username" data-username />
      <input type="submit" />
    </form>
    <div v-if="submitted" class="message">
      Thanks for your message, {{ username }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const username = ref("");
const submitted = ref(false);

function handleSubmit() {
  submitted.value = true;
}
</script>
