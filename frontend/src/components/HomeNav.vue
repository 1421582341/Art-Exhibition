<template>
  <div class="bg-white w-full flex justify-between px-5 py-3 items-center">
    <img src="../assets/logo.png" class="w-auto h-8" alt="website logo" width="32px" height="32px">
    <div class="flex justify-center">
      <div>
        <div class="dropdown relative">
          <a class="dropdown-toggle px-6 py-2.5 text-ms md:text-base leading-tight rounded transition duration-150 ease-in-out flex  items-center  whitespace-nowrap  font-bold"
            href="#" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
            Categorys
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="w-2 ml-2"
              role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path fill="currentColor"
                d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z">
              </path>
            </svg>
          </a>
          <ul
            class=" dropdown-menu min-w-max  absolute  hidden  bg-white  text-base  z-50  float-left  py-2  list-none  text-left rounded-lg  shadow-lg  mt-1  m-0  bg-clip-padding  border-none"
            aria-labelledby="dropdownMenuButton2">
            <li v-for="item in [0, 1, 2, 3]">
              <router-link
                class="dropdown-item text-sm py-2 px-8 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                :to="'/category/' + item">category{{ item }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex justify-end space-x-3 md:space-x-10 items-center text-ms md:text-lg font-bold">
      <div class="cursor-pointer">
        <a @click="goLogin" href="javascript:;">sign in</a>
      </div>
      <button class="bg-indigo-600 inline-block px-3 py-1 rounded-3xl text-white" @click="goSignUp" href="">sign
        up</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { notify } from '@kyvg/vue3-notification';
import { useRouter } from 'vue-router'

const router = useRouter()

function goLogin() {
  router.push('/login')
}

function goSignUp() {
  notify({
    type: 'warn',
    title: '敬请期待'
  })
}
</script>
<style scoped>
</style>