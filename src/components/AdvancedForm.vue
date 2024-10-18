<template>
  <form @submit.prevent="submit">
    <input type="email" v-model="form.email" />

    <textarea v-model="form.description" />

    <select v-model="form.city">
      <option value="new-york">New York</option>
      <option value="moscow">Moscow</option>
    </select>

    <input type="checkbox" v-model="form.subscribe" />

    <input type="radio" value="weekly" v-model="form.interval" />
    <input type="radio" value="monthly" v-model="form.interval" />

    <button type="submit">Submit</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface IForm {
  email: string;
  description: string;
  city: "new-york" | "moscow" | "";
  subscribe: boolean;
  interval: string;
}

const emit = defineEmits<{
  submit: [form: IForm];
}>();

const form = ref<IForm>({
  email: "",
  description: "",
  city: "",
  subscribe: false,
  interval: "",
});

function submit() {
  emit("submit", form.value);
}

console.log("some-fixes");
</script>
