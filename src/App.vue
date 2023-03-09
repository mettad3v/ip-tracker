<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Home from './pages/Home.vue'
</script>

<template>
  <Home />
</template>

<style scoped>
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}
</style>
