<template>
  <div class="h-12 fixed-top flex justify-between items-center p-2 border-b z-50 bg-gray-50">
    <ChevronLeftIcon @click="goBack" class="cursor-pointer h-full" />
    <DotsHorizontalIcon @click="showMoreList" class="cursor-pointer h-full" v-if="!state.moreList" />
    <XIcon @click="closeMoreList" class="cursor-pointer h-full" v-else />
    <transition name="dropdownAnimation">
      <ul class="w-32 absolute bg-white top-10 right-0 rounded-b-xl" v-show="state.moreList">
        <li class="h-12 leading-12 text-center hover:shadow-lg cursor-pointer">
          <router-link to="/aboutMe">AboutMe</router-link>
        </li>
      </ul>
    </transition>
  </div>
</template>
<script setup lang="ts">
import { ChevronLeftIcon, DotsHorizontalIcon, XIcon } from '@heroicons/vue/solid'
import { reactive } from 'vue'
import router from '../router/router'

const goBack = () => {
  router.go(-1)
}

const state = reactive({
  moreList: 0
})

function showMoreList() {
  state.moreList = 1
}

function closeMoreList() {
  state.moreList = 0
}
</script>
<style scoped>
.dropdownAnimation-enter,
.dropdownAnimation-leave-active {
  transition: opacity .25s;
}

.dropdownAnimation-enter-active,
.dropdownAnimation-leave-to {
  opacity: 0;
}
</style>