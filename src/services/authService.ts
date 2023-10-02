import { User, ServerResponse } from '@fabiant1498/llovizna-blog'

import axios from '@utils/axiosInstance'
import handleAsync from '@utils/handleAsync'

const authUrl = '/auth'

const loginCb = async (data: any): Promise<ServerResponse<User>> => {
  const response = await axios.post(`${authUrl}/login`, data)
  return response.data
}

const login = async (data: any) => handleAsync < User > (async () => await loginCb(data))

export { login }
