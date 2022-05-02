import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8080'
axios.defaults.timeout = 5000

const ApiGet = (url: string, params?: any, config?: any) => {
  return axios.get(url, { params, ...config })
}

const ApiPost = (url: string, data?: any, config?: any) => {
  return axios.post(url, data, config)
}

export { ApiGet, ApiPost }