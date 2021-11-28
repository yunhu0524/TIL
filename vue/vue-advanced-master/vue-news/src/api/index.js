import axios from "axios";

const config = {
  baseUrl: "https://api.hnpwa.com/v0/",
};

async function fetchList(pageName) {
  try {
    return await axios.get(`${config.baseUrl}${pageName}/1.json`);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
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
