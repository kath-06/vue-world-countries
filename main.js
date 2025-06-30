import { createApp } from "vue";
import App from './src/App.vue';
import router from "./src/router";

import '@/styles/scss/global.scss';

createApp(App).use(router).mount("#app");