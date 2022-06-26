<template>
  <section class="overflow-hidden text-gray-700">
    <div class="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
      <div class="flex flex-wrap -m-1 md:-m-2">
        <div class="flex flex-wrap w-1/2">
          <div class="w-1/2 p-1 md:p-2" @click="showCover(0)">
            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
              :src="state.galleryList[0]">
          </div>
          <div class="w-1/2 p-1 md:p-2" @click="showCover(1)">
            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
              :src="state.galleryList[1]">
          </div>
          <div class="w-full p-1 md:p-2" @click="showCover(2)">
            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
              :src="state.galleryList[2]">
          </div>
        </div>
        <div class="flex flex-wrap w-1/2">
          <div class="w-full p-1 md:p-2" @click="showCover(3)">
            <img alt=" gallery" class="block object-cover object-center w-full h-full rounded-lg"
              :src="state.galleryList[3]">
          </div>
          <div class="w-1/2 p-1 md:p-2" @click="showCover(4)">
            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
              :src="state.galleryList[4]">
          </div>
          <div class="w-1/2 p-1 md:p-2" @click="showCover(5)">
            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
              :src="state.galleryList[5]">
          </div>
        </div>
      </div>
    </div>
  </section>
  <Cover :url="state.galleryList[state.whichToShow]" v-show="state.coverVisible" @change-visible="closeCover" />
</template>
<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import service from '../utils/request'
import Cover from './Cover.vue';

const state = reactive({
  galleryList: new Array<string>,
  coverVisible: false,
  whichToShow: 0
})

onMounted(async () => {
  const { galleryList } = await service({
    method: 'get',
    url: '/getGallery'
  })
  state.galleryList = galleryList
})

function showCover(i: number) {
  state.whichToShow = i
  state.coverVisible = true
}

function closeCover() {
  state.coverVisible = false
}
</script>
<style scoped>
</style>