<template>
  <HomeNav> </HomeNav>
  <Carousel> </Carousel>
  <ul class="flex flex-col space-y-10 mt-10  mx-5 md:mx-32">
    <li v-for="display in state.displayList" class="flex odd:justify-start even:justify-end" :key="display.id">
      <router-link :to="'/detail/' + display.id">
        <div
          class="flex flex-col md:flex-row md:max-w-3xl rounded-lg bg-white shadow-lg hover:scale-110 transition duration-300 ease-in-out">
          <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            :src="display.url" alt="" />
          <div class="p-6 flex flex-col justify-start">
            <h5 class="text-gray-900 text-xl font-medium mb-2">{{ display.title }}</h5>
            <p class="text-gray-700 text-base mb-4">
              {{ display.description }}
            </p>
            <p class="text-gray-600 text-xs">{{ display.uploadTime }}</p>
          </div>
        </div>
      </router-link>
    </li>
    <li class="w-full flex justify-end" style="margin-top: 0.5rem">
      <router-link to="/category/0"
        class="text-lg text-white bg-blue-600 h-10 w-32 text-center leading-10 rounded-2xl shadow hover:shadow-xl"
        style="background-color: #4f46e5">
        view more
      </router-link>
    </li>
  </ul>
  <Gallery> </Gallery>
  <Footer> </Footer>

</template>
<script setup lang="ts">
import HomeNav from '../components/HomeNav.vue'
import Carousel from '../components/Carousel.vue'
import Gallery from '../components/Gallery.vue'
import Footer from '../components/Footer.vue'
import { onMounted, reactive } from 'vue';
import service from '../utils/request';

interface display {
  id: number
  url: string
  title: string
  description: string
  uploadTime: string
}

const state = reactive({
  displayList: new Array<display>
})

onMounted(async () => {
  const { displayList } = await service({
    method: 'get',
    url: '/getHomeDisplay'
  })
  state.displayList = displayList
})

</script>
<style>
</style>