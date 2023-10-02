import React, { createContext, useReducer, useEffect, Dispatch } from 'react'
import { AxiosResponse } from 'axios'

import { APIResponse, Models } from '@fabiant1498/social-media-types/'
import { AuthContextProps } from './auth.interface'
import axios from '@utils/axiosInstance'
import { reducer } from './reducer'

const defaultValue: AuthContextProps = {
  user: { token: null, userData: null },
  dispatch: () => {},
}

const AuthContext = createContext(defaultValue)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, dispatch] = useReducer(reducer, { token: null, userData: null })

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem('token')

      if (token) {
        const userPromise =
          (await axios.get) <
          APIResponse.ServerResponse <
          Models.User >>
            ('/users/me',
            {
              headers: { 'x-auth-token': token },
            })

        const user: AxiosResponse<APIResponse.ServerResponse<Models.User>> = await userPromise

        if (user.data.success) {
          dispatch({ type: 'SET_USER', payload: user.data.data })
        } else {
          console.log(user.data.error)
        }
      } else {
        console.log('The user is not authenticated')
      }
    }

    checkLoggedIn()
  }, [])

  return <AuthContext.Provider value={{ user, dispatch }}>{children}</AuthContext.Provider>
}

export default AuthProvider
