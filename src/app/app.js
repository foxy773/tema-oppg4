import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from '.App.vue';
import routes from '../routes.js'

createApp(App)
    .use(router)
    .mount('#app');