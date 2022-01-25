import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    show: true,
    textInput: "",
    headerText: "Header",
  },
  getters: {
    getShow(state) {
      return !state.show;
    },
  },
  mutations: {
    headerHide(state) {
      state.show = false;
    },
    headerShow(state) {
      state.show = true;
    },
  },
});
