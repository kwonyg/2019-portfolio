import { getProjects } from "../../Data/index.js";

export const projectModule = {
  state: {
    projects: {}
  },

  getters: {
    fetchedProjects(state) {
      return state.projects;
    }
  },

  mutations: {
    SET_PROJECTS(state, project) {
      console.log(project.datas);
      state.projects = project.datas;
    }
  },

  actions: {
    FETCH_PROJECTS({ commit }) {
      commit("SET_PROJECTS", getProjects());
    }
  }
};
