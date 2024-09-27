<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link id="profile" to="/profile">Profile</router-link>
    <router-link v-if="admin" id="admin" to="/admin">Admin</router-link>
  </nav>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from "vue";

withDefaults(defineProps<{ admin?: boolean }>(), {
  admin: false,
});
</script>

<style lang="scss" scoped>
nav {
  padding: 30px;
  display: flex;
  column-gap: 5vw;
  justify-content: center;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
