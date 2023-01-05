<template>
  <div id="carouselExampleCaptions" class="carousel slide relative w-full" data-bs-ride="carousel"
    style="height: 45vw;">
    <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
        aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
        aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
        aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner relative w-full overflow-hidden">
      <div class="carousel-item relative float-left w-full" v-for="item in state.carouselList" :key="item.id"
        :class="{ 'active': item.id === 0 }">
        <router-link :to="'/detail/' + item.id">
          <div class="relative overflow-hidden bg-no-repeat bg-cover" style="background-position: 50%;">
            <img :src="item.url" class="block w-full" alt="Display content of carousel" />
            <div
              class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-50">
            </div>
          </div>
          <div class="carousel-caption hidden md:block absolute text-center">
            <h5 class="text-xl">{{ item.title }}</h5>
            <p>{{ item.description }}</p>
          </div>
        </router-link>
      </div>
    </div>
    <button
      class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
      type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
      type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import service from '../common/js/request'

interface carousel {
  id: number
  url: string
  title: string
  description: string
}

const state = reactive({
  carouselList: new Array<carousel>
})

onMounted(async () => {
  const data = await service({
    method: 'get',
    url: '/getCarousel'
  })
  state.carouselList = data.carouselList
})
</script>
<style scoped>
</style>
