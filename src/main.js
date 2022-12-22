import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(VueSweetalert2);

app.mount('#app')
