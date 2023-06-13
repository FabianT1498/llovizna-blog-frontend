import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { ChakraBaseProvider } from '@chakra-ui/react'

import { Fonts } from '@styles/global/font'
import theme from '@styles/theme'
import Login from '@components/pages/login'

const App = () => {
  return (
    <ChakraBaseProvider theme={theme}>
      <Fonts />
      <Router>
        <Switch>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </ChakraBaseProvider>
  )
}

export default App
