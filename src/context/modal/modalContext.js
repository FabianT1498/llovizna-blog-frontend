import React, { createContext, useReducer } from 'react'

import { reducer } from './reducer'

export const ModalContext = createContext()

const ModalProvider = ({ children }) => {
  const [modal, dispatch] = useReducer(reducer, {
    component: null,
    props: {},
    isHovered: false,
  })

  return <ModalContext.Provider value={{ modal, dispatch }}>{children}</ModalContext.Provider>
}

export default ModalProvider
