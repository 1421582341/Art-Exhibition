<template>
  <DetailHeader></DetailHeader>
  <img :src="state.url" @click="seeCover"
    class="w-full h-auto transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl mx-auto cursor-pointer mt-12" />
  <div class="flex flex-col">
    <div class="mt-4 w-4/5 mx-auto">
      <img src="https://mdbcdn.b-cdn.net/img/new/avatars/5.webp" class="rounded-lg w-16 inline-block" alt="Avatar" />
      <div class="inline-block ml-5 align-middle">
        <h5 class="font-bold">{{ state.artistName }}</h5>
        <p class="text-xs text-slate-500">{{ state.artistTitle }}</p>
      </div>
      <div class="mt-6 leading-6">
        <p>{{ state.detailDescription }}</p>
      </div>
      <div class="flex flex-wrap" style="margin:0 -0.75rem">
        <button type="button" v-for="item in state.tagList"
          class="inline-block px-4 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out mt-4 mx-3">{{
              item
          }}</button>
      </div>
      <Action />
      <div class="border-t mt-2 pt-2 flex flex-col">
        <h5 class="font-bold mb-2">Comment</h5>
        <ul>
          <li class="tracking-normal" v-for="item in state.commentList">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
  <transition name="fade">
    <Cover v-show="state.coverVisible" :url="state.url" @change-visible="closeCover" />
  </transition>
</template>
<script setup lang="ts">
import DetailHeader from '../components/DetailHeader.vue'
import Action from '../components/Action.vue'
import { useRoute, useRouter } from 'vue-router'
import { onMounted, onUnmounted, reactive, ref } from 'vue'
import service from '../common/js/request'
import Cover from '../components/Cover.vue'

const route = useRoute()
const router = useRouter()

const state = reactive({
  url: '',
  artistName: '',
  artistTitle: '',
  detailDescription: '',
  tagList: new Array<string>,
  commentList: new Array<string>,
  coverVisible: 0
})


onMounted(async () => {
  const { id } = route.params
  if (id !== '10000') {
    const { url, artistName, artistTitle, detailDescription, tagList, commentList } = await service({
      method: 'get',
      url: `/getDetail/${id}`
    })
    state.url = url
    state.artistName = artistName
    state.artistTitle = artistTitle
    state.detailDescription = detailDescription
    state.tagList = tagList
    state.commentList = commentList
  } else {
    const { artistName, artistTitle, detailDescription, tagList, commentList } = await service({
      method: 'get',
      url: `/getDetail/${id}`
    })
    state.url = <string>localStorage.getItem('img')
    state.artistName = artistName
    state.artistTitle = artistTitle
    state.detailDescription = detailDescription
    state.tagList = tagList
    state.commentList = commentList
  }
})

onUnmounted(() => {
  localStorage.removeItem('img')
})

function seeCover() {
  state.coverVisible = 1
}


function closeCover() {
  state.coverVisible = 0
}
</script>
<style scoped>
.fade-enter,
.fade-leave-active {
  transition: opacity .25s;
}

.fade-enter-active,
.fade-leave-to {
  opacity: 0;
}
</style>