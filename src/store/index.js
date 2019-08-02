import Vue from "vue";
import Vuex from "vuex";

import { windowModule } from "./modules/window.js";
import { talkModule } from "./modules/talk.js";
import { activityModule } from "./modules/acitivities.js";
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    windowModule,
    talkModule,
    activityModule
  }
});
