import { createApp } from 'vue'
import App from './App.vue'
import './common/css/tailwind.css'
import router from './router/router'
import 'tw-elements'
import Notifications from '@kyvg/vue3-notification'
import 'animate.css'

const app = createApp(App)

app
  .use(router)
  .use(Notifications)
  .mount('#app')
