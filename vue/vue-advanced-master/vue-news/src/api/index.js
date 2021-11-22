import axios from "axios";

const config = {
  baseUrl: "https://api.hnpwa.com/v0/",
};

function fetchList(pageName) {
  return axios.get(`${config.baseUrl}${pageName}/1.json`);
}

function fetchUser(userName) {
  const url = `${config.baseUrl}user/${userName}.json`;
  return axios.get(url);
}

function fetchItem(itemId) {
  const url = `${config.baseUrl}item/${itemId}.json`;
  return axios.get(url);
}

export { fetchUser, fetchItem, fetchList };
