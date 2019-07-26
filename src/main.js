import Vue from "vue";
import App from "./App.vue";
import VueDragula from "vue-dragula";

import { router } from "./routes/index.js";
import { store } from "./store/index.js";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  VueDragula,
  render: h => h(App)
}).$mount("#app");
