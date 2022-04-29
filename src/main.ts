import { createApp } from 'vue'
import { router } from '@/router'
import App from '@/App.vue'
import pinia from '@/store'
import ElementPlus from 'element-plus'
import '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import './assets/fonts/iconfont.css'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.use(pinia)

app.mount('#app')
