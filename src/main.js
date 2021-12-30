import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/main.css';
// Uncomment only in Dev to reduce size
//import '@fortawesome/fontawesome-free/js/all';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/config.js';

let app;

onAuthStateChanged(auth, () => {
    if (!app) {
        app = createApp(App).use(store).use(router).mount('#app')
    }
});
