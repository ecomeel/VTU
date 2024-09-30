<template>
  <button @click="handleClick">Increment</button>
</template>

<script setup lang="ts">
import { ref } from "vue";

type EmitArg = {
  count: number;
  isEven: boolean;
};

const emit = defineEmits<{
  increment: [count: EmitArg];
}>();

const count = ref(0);

function handleClick() {
  count.value++;
  emit("increment", {
    count: count.value,
    isEven: count.value % 2 === 0,
  });
}
</script>
