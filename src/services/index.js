import axios from 'axios';
import env from '../config/env';

export default (endpoint = env.REACT_APP_API_ENDPOINT, accessToken) => {
  let headers = { 'Content-Type': 'application/json' };
  if (accessToken) {
    headers = {
      ...headers,
      Authorization: `Bearer ${accessToken}`,
    };
  }

  const instance = axios.create({
    baseURL: endpoint,
    timeout: 30000,
    maxRedirects: 0,
    headers,
  });

  return instance;
};
