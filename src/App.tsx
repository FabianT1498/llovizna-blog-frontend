import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { ChakraBaseProvider } from '@chakra-ui/react'

import { Fonts } from '@styles/global/font'
import theme from '@styles/theme'

import AppRouter from './app.router'

// import AuthProvider from '@context/auth/authContext'

const App = () => {
  return (
    <ChakraBaseProvider theme={theme}>
      <Fonts />
      <AppRouter />
    </ChakraBaseProvider>
  )
}

export default App
