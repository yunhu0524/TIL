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
  async FETCH_LIST({ commit }, pageName) {
    try {
      // #3
      const response = await fetchList(pageName);
      // #4
      commit("SET_LIST", response.data);
      return response;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  },
};
