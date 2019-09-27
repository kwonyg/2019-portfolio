import axios from "axios";

function initDatas() {
  return axios.get("/data.json");
}

export { initDatas };
