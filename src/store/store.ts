import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { Acitivity, State } from "./store.interface";
import { initDatas } from "@/api/index";

Vue.use(Vuex);

const store: StoreOptions<State> = {
  state: {
    activities: []
  },
  mutations: {
    SET_INIT_DATAS(state, data) {
      // set Acitivities datas
      const activities: Acitivity[] = data.activities;
      state.activities = activities;
    }
  },
  actions: {
    INIT_DATAS({ commit }) {
      return initDatas()
        .then(({ data }) => {
          commit("SET_INIT_DATAS", data);
        })
        .catch(() => {
          alert("앗.. 데이터를 불러오지 못했습니다.");
        });
    }
  }
};

export default new Vuex.Store(store);
