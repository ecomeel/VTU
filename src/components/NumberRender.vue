<template>
  <div>{{ numbers }}</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ even: boolean }>()

const numbers = computed(() => {
  const evens = []
  const odds = []

  for (let i = 1; i < 10; i++) {
    if (i % 2 === 0) {
      evens.push(i)
    } else {
      odds.push(i)
    }
  }

  return props.even ? evens.join(', ') : odds.join(', ')
})



</script>