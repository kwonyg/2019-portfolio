import { getActivites } from "../../Data/index.js";

export const activityModule = {
  state: {
    activities: {}
  },

  getters: {
    fetchedActivities(state) {
      return state.activities;
    }
  },

  mutations: {
    SET_ACTIVITIES(state, activity) {
      state.activities = activity.datas;
    }
  },

  actions: {
    FETCH_ACTIVITIES({ commit }) {
      commit("SET_ACTIVITIES", getActivites());
    }
  }
};
