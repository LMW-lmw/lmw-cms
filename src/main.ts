import { createApp } from 'vue'
import App from './App.vue'

import 'normalize.css'
import './assets/css/index.less'
import router from './router'

createApp(App).use(router).mount('#app')
