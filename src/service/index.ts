import Request from './request'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import type { RequestConfig } from './request/types'
// 重写返回类型
interface HttpRequestConfig<T, R> extends RequestConfig<R> {
  data?: T
}
const request = new Request({
  baseURL: import.meta.env.VITE_URL_H5_HW2,
  timeout: 1000 * 60 * 5,
  headers: {
    accept: 'application/json',
    'Accept-Language': 'zh',
    'Ocp-Apim-Subscription-Key': '41ebd915861541819dc803e3eddfdeed',
  },
  interceptors: {
    // 请求拦截器
    requestInterceptors: (config: AxiosRequestConfig) => {
      window.$loadingBar?.start()
      return config
    },
    // 响应拦截器
    responseInterceptors: (result: AxiosResponse) => {
      window.$loadingBar?.finish()
      return result
    },
    responseInterceptorsCatch: (error) => {
      window.$loadingBar?.error()
      error.response && window.$message?.error(error.response.data)
      return Promise.reject(new Error(error.response.data))
    },
  },
})

/**
 * @description: 函数的描述
 * @generic D 请求参数
 * @generic T 响应结构
 * @param {HttpRequestConfig} config 不管是GET还是POST请求都使用data
 * @returns {Promise}
 */
const HttpRequest = <D = any, T = any>(config: HttpRequestConfig<D, T>) => {
  const { method = 'GET' } = config
  if (method === 'get' || method === 'GET') config.params = config.data

  return request.request<T>(config)
}
// 取消请求
export const cancelRequest = (url: string | string[]) => {
  return request.cancelRequest(url)
}
// 取消全部请求
export const cancelAllRequest = () => {
  return request.cancelAllRequest()
}

export default HttpRequest
