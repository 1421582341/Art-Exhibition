import * as axios from 'axios'

declare module 'axios' {
  interface AxiosInstance {
    (config: AxiosRequestConfig): Promise<any>,
  }
  interface HeadersDefaults {
    common: AxiosRequestHeaders;
    delete: AxiosRequestHeaders;
    get: AxiosRequestHeaders;
    head: AxiosRequestHeaders;
    post: AxiosRequestHeaders;
    put: AxiosRequestHeaders;
    patch: AxiosRequestHeaders;
    options?: AxiosRequestHeaders;
    purge?: AxiosRequestHeaders;
    link?: AxiosRequestHeaders;
    unlink?: AxiosRequestHeaders;
    token?: any;
  }
}