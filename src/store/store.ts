import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { Project, Acitivity, Message, State } from "./store.interface";
import { initDatas, getIpAddress } from "@/api/index";
import { DB } from "@/firebase/index";

Vue.use(Vuex);

const store: StoreOptions<State> = {
  state: {
    projects: [],
    activities: [],
    messages: []
  },

  getters: {
    getProjects(state) {
      return state.projects;
    },

    getActivities(state) {
      return state.activities;
    },

    getMessages(state) {
      return state.messages;
    }
  },

  mutations: {
    SET_INIT_DATAS(state, data) {
      // set Acitivities datas
      const projects: Project[] = data.projects;
      const activities: Acitivity[] = data.activities;

      state.projects = projects;
      state.activities = activities;
    },

    SET_MESSAGES(state, data) {
      const messages: Message[] = data;
      state.messages = messages;
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
    },

    async POST_MESSAGE(
      { commit },
      { userName, content }: { userName: string; content: string }
    ) {
      const DBref = await DB.collection("guestBook");
      const ipResult = await getIpAddress();
      const dbResult = await DBref.add({
        content,
        userName,
        createDate: new Date()
      });

      await DBref.doc(dbResult.id).update({
        ipAddress: ipResult.data.ip,
        id: dbResult.id
      });
    },

    FETCT_MESSAGES({ commit }) {
      return DB.collection("guestBook")
        .orderBy("createDate", "desc")
        .onSnapshot(snapshot => {
          const data: any = []; // 타입설정 불가,  https://stackoverflow.com/questions/51606198/typescript-interface-conformance-with-firestore-queries
          snapshot.forEach(doc => {
            data.push(doc.data());
          });
          commit("SET_MESSAGES", data);
        });
    }
  }
};

export default new Vuex.Store(store);
