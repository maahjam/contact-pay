import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { defaultResponseTransformer } from '../transformers/defaultTransformers';

interface TransformerConfig {
  responseTransformer?: (data: any) => any;
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:1337/', 
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
