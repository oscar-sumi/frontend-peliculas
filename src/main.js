import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/styles.scss';

createApp(App).use(store).use(router).use(bootstrap).use(VueAxios, axios).mount('#app')
