import { ServerResponse } from '@fabiant1498/llovizna-blog'
const handleAsync = async <T>(asyncFunction: Function): Promise<ServerResponse<T>> => {
  try {
    const result = await asyncFunction()
    return result
  } catch (error: any) {
    if (error?.response && error.response?.data) {
      return error.response.data
    }

    return error
  }
}

export default handleAsync
