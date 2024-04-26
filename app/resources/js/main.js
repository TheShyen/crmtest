import { createApp } from "vue";
import { Quasar } from "quasar";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";
import App from "./App.vue";
import { router } from "./router/index.js";
import Vue3Toastify from "vue3-toastify";

import ru from "quasar/lang/ru";

const myApp = createApp(App);

myApp
  .use(router)
  .use(Quasar, {
    plugins: {},
    lang: ru,
  })
  .use(Vue3Toastify, {
    autoClose: 3000,
  });

myApp.mount("#app");
