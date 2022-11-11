import { createApp } from "vue";
import app from './app.vue'

const mountElement = document.querySelector('#vue-container');
const vueApp = createApp(app);
vueApp.mount(mountElement);