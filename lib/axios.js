import Axios from 'axios';
import { cacheAdapterEnhancer } from 'axios-extensions';

const axiosConfig = {
  baseURL: '192.168.1.1:5000',
  headers: { 'Cache-Control': 'no-cache' },
  timeout: 15000,
  adapter: cacheAdapterEnhancer(Axios.defaults.adapter, { enabledByDefault: false }),
  // adapter: throttleAdapterEnhancer(cacheAdapterEnhancer(Axios.defaults.adapter)),
};

const axios = Axios.create(axiosConfig);

export default axios;
