import { createApp } from 'vue'

import SmUi from './entry'

import router from './router'

import App from './home.vue'

createApp(App).use(router).use(SmUi).mount('#app')
