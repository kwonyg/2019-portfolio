import { firestore } from "../../firebase/config.js";
// import firebase from "firebase/app";

export const talkModule = {
  state: {
    user: null,
    messages: []
  },

  getters: {
    fetchedMessages(state) {
      return state.messages;
    },

    fetchedUser(state) {
      return state.user;
    }
  },

  mutations: {
    SET_USER(state, userData) {
      state.user = userData;
    },
    SET_MESSAGES(state, messageDatas) {
      state.messages = messageDatas;
    }
  },

  actions: {
    ADD_USER({ commit }, { nick }) {
      commit("SET_USER", nick);
    },

    GET_MESSAGES({ commit }) {
      return firestore
        .collection("chat")
        .orderBy("createdAt", "asc")
        .onSnapshot(querySnapshot => {
          let datas = [];
          querySnapshot.forEach(doc => {
            datas.push(doc.data());
          });
          commit("SET_MESSAGES", datas);
        })
        .catch(err => {
          console.log(err);
        });
    },

    ADD_MESSAGE({ commit, state }, { message }) {
      return firestore
        .collection("chat")
        .doc()
        .set({
          nick: "fealm",
          content: message,
          createdAt: new Date()
        })
        .then(() => {
          console.log("돼따");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
