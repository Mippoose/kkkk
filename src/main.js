import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

// createApp(App).use(store).mount('#app')

const Vue = createApp(App).use(store).mount('#app')
window.Vue = Vue;

window.ROOT_VUE = Vue;


// window.API = window.ROOT_VUE.$children[0]
