import Vue from "vue";
import Vuex from "vuex";

import { windowModule } from "./modules/window.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: { windowModule }
});
