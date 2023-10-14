import axios from 'axios'

import { getAuthUser } from '@services/authService'

const instance = axios.create({
  baseURL: process.env.REACT_APP_URL, // THE API (cloud function) URL
})

instance.interceptors.request.use(
  (config) => {
    const authUser = getAuthUser()
    if (authUser) {
      config.headers['x-access-token'] = `${authUser.token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error?.response?.status === 401) {
      localStorage.removeItem('authUser')
      window.location.reload()
    } else {
      return Promise.reject(error.response)
    }
  }
)

const get = (url: string, params: any, config = {}) => instance.get(url, { params, ...config })
const post = (url: string, data: any, config = {}) => instance.post(url, data, config)

const methods = { get, post }
export default methods
