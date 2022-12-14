import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'element-plus/theme-chalk/index.css'
import ElementPlus from 'element-plus'
import { createPinia } from 'pinia';
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
const pinia = createPinia();
pinia.use(piniaPluginPersistedState)
createApp(App).use(router).use(ElementPlus).use(pinia).mount('#app')
