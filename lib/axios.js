import Axios from 'axios';
import { cacheAdapterEnhancer } from 'axios-extensions';

const axiosConfig = {
  baseURL: '',
  headers: { 'Cache-Control': 'no-cache' },
  timeout: 15000,
  adapter: cacheAdapterEnhancer(Axios.defaults.adapter, { enabledByDefault: false }),
  // adapter: throttleAdapterEnhancer(cacheAdapterEnhancer(Axios.defaults.adapter)),
};

const axios = Axios.create(axiosConfig);

export default axios;
