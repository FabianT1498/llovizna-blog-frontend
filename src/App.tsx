import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '@styles/global'
import theme from '@styles/theme'
import Login from '@components/pages/login'

const App = () => {
  return (

    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
