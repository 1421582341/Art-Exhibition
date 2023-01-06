<template>
  <div class="h-screen w-full overflow-y-auto flex justify-center" @scroll="addImg($event)">
    <header class="h-12 fixed-top flex justify-between items-center p-2 border-b z-50 bg-gray-50">
      <chevron-left-icon class="h-full" @click="goBack" />
      <span class="text-base">category{{ state.category }}</span>
      <menu-icon class="h-full" @click="showAside" />
    </header>
    <div class="fixed right-0 top-0 h-screen w-full bg-black opacity-25" v-show="state.aside" @click="hideAside"></div>
    <transition enter-active-class="animate__animated animate__fadeInLeft"
      leave-active-class="animate__animated animate__fadeOutLeft">
      <aside class="fixed left-0 top-0 h-screen w-1/3 bg-white pt-12 flex flex-col" v-show="state.aside">
        <div class="h-12 leading-12 border-b text-center" v-for="item in [0, 1, 2, 3]" @click="changeCategory(item)">
          category{{ item }}
        </div>
      </aside>
    </transition>

    <!-- <div class="mt-12 grid grid-cols-2 gap-2 mx-2">
      <div class="flex flex-col">
        <img class="w-full h-auto mt-2" v-for="item in state.leftImg" :src="item" @click="goDetail(item)">
      </div>
      <div>
        <img class="w-full h-auto mt-2" v-for="item in state.rightImg" :src="item" @click="goDetail(item)">
      </div>
    </div> -->
    <section class="img-container">
      <img class="w-full h-auto mt-2" v-for="item in state.imgList" v-lazy="item" @click="goDetail(item)">
    </section>
    <div class="flex items-center justify-center" v-show="state.isBusy">
      <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full m-12" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { MenuIcon, ChevronLeftIcon } from '@heroicons/vue/solid'
import { onMounted, reactive } from 'vue'
import service from '../common/js/request'
import router from '../router/router'
import { useRoute } from 'vue-router'

const route = useRoute()

let page = 0

const state = reactive({
  // leftImg: new Array<string>,
  // rightImg: new Array<string>,
  imgList: new Array<string>,
  isBusy: false,
  aside: false,
  category: 0
})

async function addImg(e: any) {
  const { scrollTop, clientHeight, scrollHeight } = e.target
  if (scrollTop + clientHeight >= scrollHeight - 50 && state.isBusy === false) {
    state.isBusy = true
    const { imgList } = await service({
      method: 'get',
      url: '/getWaterfall',
      params: {
        page,
        category: state.category
      }
    })
    // state.leftImg = state.leftImg.concat(imgList.slice(0, 10))
    // state.rightImg = state.rightImg.concat(imgList.slice(10, 20))
    state.imgList = state.imgList.concat(imgList)
    state.isBusy = false
    page++
  }
}

onMounted(async () => {
  const { id } = route.params
  if (id) {
    state.category = id as unknown as number
  }
  const { imgList } = await service({
    method: 'get',
    url: '/getWaterfall',
    params: {
      page: page,
      category: state.category
    }
  })
  // state.leftImg = imgList.slice(0, 10)
  // state.rightImg = imgList.slice(10, 20)
  state.imgList = imgList
  page++
})


function goBack() {
  router.go(-1)
}

function showAside() {
  state.aside = true
}

function hideAside() {
  state.aside = false
}

function goDetail(item: string) {
  localStorage.setItem('img', item)
  router.push('/detail/10000')
}

async function changeCategory(item: number) {
  state.category = item
  // state.leftImg = []
  // state.rightImg = []
  state.imgList = []
  page = 0
  const { imgList } = await service({
    method: 'get',
    url: '/getWaterfall',
    params: {
      page,
      category: state.category
    }
  })
  // state.leftImg = imgList.slice(0, 10)
  // state.rightImg = imgList.slice(10, 20)
  state.imgList = imgList
  state.aside = false
}

</script>
<style scoped>
@media (min-width: 768px) {
  .img-container {
    column-count: 2;
  }
}

@media (min-width: 992px) {
  .img-container {
    column-count: 3;
  }
}

@media (min-width: 1200px) {
  .img-container {
    column-count: 5;
  }
}

.img-container {
  column-gap: 10px;
  max-width: 1200px;
  @apply mt-10
}
</style>