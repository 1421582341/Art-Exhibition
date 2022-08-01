import * as axios from 'axios'

// 由于对于axios进行了封装，对返回的数据进行解构，所以这里对接口重新定义
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