import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    show: true,
    textInput: "",
    headerText: "Header",
  },
  getters: {},
  mutations: {
    toggleBtn(state) {
      state.show = !state.show;
    },
  },
});
