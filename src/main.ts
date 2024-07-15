import { createApp } from 'vue'
import '~/style.css'
import { createRouterScroller } from 'vue-router-better-scroller'
import App from '~/App.vue'
// main.ts
import 'virtual:uno.css'
// 引入组件库的少量全局样式变量
import 'tdesign-mobile-vue/es/style/index.css'

import router from '~/router'

import axios from '~/axios'

createApp(App).use(router).use(createRouterScroller({
  selectors: {
    'window': true,
    'body': true,
    '.scrollable': true,
  },
})).use(axios).use(createPinia()).mount('#app')
