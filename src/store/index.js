import Vue from "vue";
import Vuex from "vuex";

import { projectModule } from "./modules/projects.js";
import { activityModule } from "./modules/acitivities.js";
import { talkModule } from "./modules/talk.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    projectModule,
    activityModule,
    talkModule
  }
});
