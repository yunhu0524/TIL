import { fetchUser, fetchItem, fetchList } from "../api/index.js";

export default {
  FETCH_USER({ commit }, name) {
    return fetchUser(name).then((response) =>
      commit("SET_USER", response.data)
    );
  },
  FETCH_ITEM({ commit }, itemId) {
    return fetchItem(itemId).then((response) =>
      commit("SET_ITEM", response.data)
    );
  },
  // #2
  FETCH_LIST({ commit }, pageName) {
    // #3
    return fetchList(pageName).then(({ data }) =>
      // #4
      commit("SET_LIST", data)
    );
  },
};
