import React, { createContext, useReducer } from 'react'

import { reducer } from './reducer'

export const BasketContext = createContext()

const BasketProvider = ({ children }) => {
  const [basket, dispatch] = useReducer(reducer, [])

  return <BasketContext.Provider value={{ basket, dispatch }}>{children}</BasketContext.Provider>
}

export default BasketProvider
