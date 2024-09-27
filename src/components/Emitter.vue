<template>
  <div></div>
</template>
  
<script setup lang='ts'>
const emit = defineEmits<{
  myEvent: [name: string, password: string]
}>()

const emitEvent = () => {
   emit('myEvent', 'name', 'password')
}

defineExpose({
  emitEvent
})
</script>
  
<style lang="scss" scoped>
  
</style>