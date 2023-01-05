<template>
  <div
    class="fixed top-0 left-0 transition-opacity duration-500 ease-in-out w-full h-screen bg-black bg-opacity-80 flex items-center justify-center"
    @click="$emit('changeVisible')">
    <img :src="url" class="mx-auto">
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  url: String
})

const emit = defineEmits(['changeVisible'])
</script>
<style scoped>
</style>