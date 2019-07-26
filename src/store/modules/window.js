import { getAboutMe, getProjects, getActivites } from "../../Data/index.js";

export const windowModule = {
  state: {
    windowData: {}
  },

  getters: {
    fetchedWindowData(state) {
      return state.windowData;
    }
  },

  mutations: {
    SET_WINDOW_DATA(state, fileName) {
      if (fileName === "aboutme") {
        state.windowData = getAboutMe();
      } else if (fileName === "projects") {
        state.windowData = getProjects();
      } else if (fileName === "activities") {
        state.windowData = getActivites();
      }
    }
  },

  actions: {
    GET_WINDOW_DATA({ commit }, { fileName }) {
      commit("SET_WINDOW_DATA", fileName);
    }
  }
};
