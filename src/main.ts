// import * as ammo from "@/assets/js/ammo.js";
// console.log(ammo);

// (window as any).Ammo = ammo;
import { createApp } from "vue";
import Router from "./router/index.js";
import Store from "./store/index.js";
// const Router = require('./router/index.js')
// const Store = require('./store/index.js')
import App from "./App.vue";
import fetch from "./service/index.js";

import StorePinia from "./store-pinia/index.js";

// import VueDragResize from 'vue-drag-resize'
const app = createApp(App);
app.use(Router).use(Store).use(StorePinia).mount("#app");
// console.log(VueDragResize);

app.config.globalProperties.$http = fetch;
