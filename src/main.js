import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './routes/routes';
import {ENV} from './plugins/constConfig';

const app = createApp(App)

app.use(router)
app.use(VueAxios, axios);
app.provide('axios', app.config.globalProperties.axios);
app.mixin({
    data() {
        return {
            env: ENV
        }
    },
})

app.mount('#app');

