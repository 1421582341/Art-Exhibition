import { createApp } from 'vue'
import App from './App.vue'
import './common/css/tailwind.css'
import router from './router/router'
import 'tw-elements'
import Notifications from '@kyvg/vue3-notification'
import 'animate.css'
import lazyload from './directives/lazyload'

const app = createApp(App)

app
  .use(router)
  .use(Notifications)
  .use(lazyload)
  .mount('#app')
