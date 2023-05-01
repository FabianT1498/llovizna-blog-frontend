import React, { createContext, useReducer, useEffect } from 'react'

import { reducer } from './reducer.ts'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducer(reducer, null)

  return <AuthContext.Provider value={{ user, dispatch }}>{children}</AuthContext.Provider>
}

export default AuthProvider
