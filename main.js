import { createApp } from "vue";
import { createPinia } from "pinia";
import App from './src/App.vue';
import router from "./src/router";

import '@/styles/scss/global.scss';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount("#app");