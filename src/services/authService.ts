import { User, ServerResponse } from '@fabiant1498/llovizna-blog'

import http from '@utils/http-client'
import handleAsync from '@utils/handleAsync'

const authUrl = '/auth'

const loginCb = async (data: any): Promise<ServerResponse<User>> => {
  const response = await http.post(`${authUrl}/login`, data, {
    transformResponse: [(result: any) => JSON.parse(result)],
  })

  console.log(response)
  localStorage.setItem('authUser', JSON.stringify(response.data.data))

  return response.data
}

const registerCb = async (data: any): Promise<ServerResponse<User>> => {
  const response = await http.post(`${authUrl}/register`, data)
  return response.data
}

const forgotPasswordCb = async (data: any): Promise<ServerResponse<any>> => {
  const response = await http.post(`${authUrl}/forgot-password`, data)
  return response.data
}

const getAuthUser = (): User | null => {
  const user = localStorage.getItem('authUser')
  return user ? JSON.parse(user) : null
}

const login = async (data: any) => handleAsync < User > (async () => await loginCb(data))
const register = async (data: any) => handleAsync < User > (async () => await registerCb(data))
const forgotPassword = async (data: any) =>
  handleAsync < any > (async () => await forgotPasswordCb(data))

export { login, register, getAuthUser, forgotPassword }
