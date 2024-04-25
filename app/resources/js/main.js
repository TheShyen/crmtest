import { createApp } from 'vue'
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import App from './App.vue'
import {router} from "./router/index.js";
import ru from "quasar/lang/ru";

const myApp = createApp(App)

myApp.use(router).use(Quasar, {
    plugins: {},
    lang: ru
})

myApp.mount('#app')