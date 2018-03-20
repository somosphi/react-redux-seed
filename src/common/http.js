import axios from 'axios';
import config from 'config';

const instance = axios.create({
  baseURL: config.apiEndpoint,
  timeout: 30000,
  headers: {},
});

export default instance;
