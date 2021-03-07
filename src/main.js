import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import VueNotifications from 'vue-notifications'
import iziToast from 'izitoast'// https://github.com/dolce/iziToast
import 'izitoast/dist/css/iziToast.min.css'

function toast ({title, message, type, timeout, cb}) {
  if (type === VueNotifications.types.warn) type = 'warning'
  return iziToast[type]({title, message, timeout})
}

const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
}



// createApp(App).use(store).mount('#app')

const Vue = createApp(App).use(store).use(VueNotifications, options).mount('#app')
window.Vue = Vue;

window.ROOT_VUE = Vue;


// window.API = window.ROOT_VUE.$children[0]
