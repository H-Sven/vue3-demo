import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import installPlugins from '@/plugins'

const app = createApp(App)
// app.config.globalProperties.$message = 1111
// app.provide('$message', '123123')
installPlugins(app)
app.use(store)
app.use(router)
app.mount('#app')
