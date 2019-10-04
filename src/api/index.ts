import axios from 'axios';

function initDatas() {
  return axios.get('/data.json');
}

function getIpAddress() {
  return axios.get('https://jsonip.com');
}

export { initDatas, getIpAddress };
