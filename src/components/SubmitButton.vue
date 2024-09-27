<template>
  <div>
    <span v-if="isAdmin">Admin Privileges</span>
    <span v-else>Not authorized</span>
    <button>
      {{ msg }}
    </button>
  </div>
</template>

<script setup lang="ts">
type Props = {
  isAdmin?: boolean;
  msg: string;
}

withDefaults(defineProps<Props>(), {
  isAdmin: false,
})

</script>