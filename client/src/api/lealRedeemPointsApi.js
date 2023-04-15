import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

const { VITE_API_URL_REDEEM } = getEnvVariables();

const lealRedeemApi = axios.create({
  baseURL: VITE_API_URL_REDEEM,
});

lealRedeemApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    //Authorization: `Bearer ${localStorage.getItem('token')}`,
  };
  return config;
});

export default lealRedeemApi;
