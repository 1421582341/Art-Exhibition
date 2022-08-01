<template>
  <div class="grid md:grid-cols-4 grid-cols-12">
    <div class="md:col-span-1 col-span-1">
      <UserSidebar></UserSidebar>
    </div>
    <div class="md:col-span-3 overflow-auto px-3 md:px-5 col-span-11">
      <Search></Search>
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup lang="ts">
import UserSidebar from '../components/UserSidebar.vue'
import Search from '../components/Search.vue'
</script>
<style lang="">
  
</style>