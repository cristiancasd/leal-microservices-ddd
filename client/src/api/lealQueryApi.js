import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

const { VITE_API_URL_QUERY } = getEnvVariables();

const lealQueryApi = axios.create({
  baseURL: VITE_API_URL_QUERY,
});

lealQueryApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    //Authorization: `Bearer ${localStorage.getItem('token')}`,
  };
  return config;
});

export default lealQueryApi;
