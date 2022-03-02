import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { getBaseUrl } from '@/plugins/utilFuncs'

import { LOGIN_EXPIRATION_CODE, SUCESS_CODE } from '@/constant/constant'

// 这里应该是getUrl
const baseUrl: string = getBaseUrl()

const service = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  // 请求头
  headers: {
    'content-type': 'application/json;charset=utf-8',
    // 请求接口调用TOKEN
    'X-Amz-Security-Token': ''
  },
})

service.interceptors.request.use((config: AxiosRequestConfig) => {
  // TODO 这里配置请求要添加的数据，比如auth、Content-Type等
  // 处理 token
  const token = ''
  config.headers!['X-Amz-Security-Token'] = token
  // 开启 loading

  return config
}, (error) => {
  return Promise.reject(error)
})

service.interceptors.response.use(
  ({ data, config }: AxiosResponse) => {
    // 请求码
    const code = data.code
    // 是否登陆超时
    const isLoginExpiration = code === LOGIN_EXPIRATION_CODE
    // 是否错误
    const isError = code !== SUCESS_CODE

    if (isLoginExpiration) {
      loginExpiration()
      return Promise.reject(data.msg)
    }

    if (isError) {
      const msg = data.msg || '系统错误'
      // 统一展示错误信息
      return Promise.reject(msg)
    }

    return Promise.resolve(data)
  },
  error => {
    // TODO 接口规则status-code在这里，比如权限过期，重新登录，结果500等
    if (error.response === undefined) {
      // 建议直接提示，未知错误
    } else if (error.response.status === 500 || error.response.status === 404) {
      // 接口404 or 500 一般都是服务错误
    } else if (error.response.status === 403 || error.response.status === 401) {
      // 比如token过期之类的，需要跳转到登录页面
    }
    return Promise.reject(error)
  }
)

// 登陆过期处理
function loginExpiration () {}

/**
 * GET请求
 * @return {Promise}
 */
export function $get<T>(url: string, params: object): Promise<T> {
  return new Promise((resolve, reject) =>{
    service
      .get(url, { params })
      .then(res => {
        resolve(res.data);
      }).catch(err =>{
        reject(err.data)
      })
  })
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function $post(url: string, params: object) {
  return new Promise((resolve, reject) => {
    service
    .post(url, { params })
    .then(res => {
      resolve(res.data);
    })
    .catch(err =>{
      reject(err.data)
    })
  })
}

export default service
