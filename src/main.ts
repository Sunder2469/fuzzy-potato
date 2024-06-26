import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from '@/App.vue'
import { router } from './router/routes';
import '@fortawesome/fontawesome-free/js/all.js';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');