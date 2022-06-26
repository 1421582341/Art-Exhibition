<script setup lang="ts">
</script>

<template>
  <router-view v-slot="{ Component }">
    <component :is="Component"></component>
  </router-view>
  <notifications position="right bottom" width="30%" />
</template>

<style>
</style>
