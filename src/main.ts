import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import i18n from '@/i18n';
import metaManager from '@/plugins/vueMetaPlugin';
import AppLayout from '@/layouts/AppLayout.vue';

import '@/styles/index.css';

const app = createApp(App);

app.use(metaManager);
app.use(i18n);
app.use(store);
app.use(router);

app.component('AppLayout', AppLayout);

app.mount('#min-max');
