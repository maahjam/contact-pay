import { AxiosRequestConfig } from 'axios';

declare module 'axios' {
  export interface AxiosRequestConfig {
    transformerConfig?: {
      requestTransformer?: (data: any) => any;
      responseTransformer?: (data: any) => any;
    };
  }
}
