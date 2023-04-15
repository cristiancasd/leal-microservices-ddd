import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

const { VITE_API_URL_ADD } = getEnvVariables();

const lealAddApi = axios.create({
  baseURL: VITE_API_URL_ADD,
});

lealAddApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    //Authorization: `Bearer ${localStorage.getItem('token')}`,
  };
  return config;
});

export default lealAddApi;
