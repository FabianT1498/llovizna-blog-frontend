import React, { useState } from 'react'
import { Text, Alert, AlertIcon, AlertDescription, Box } from '@chakra-ui/react'

import { LoginContainer, FormContainer, AlertContainer } from './login.styles'
import Link from '@components/atoms/link/link.styles'
import LoginForm from '@components/organisms/loginForm'
import { H2 } from '@components/atoms/heading/heading.styles'

type Props = {
  children?: React.ReactNode,
  className?: string,
}

const Login = (props: Props) => {
  const [showAlert, setShowAlert] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  return (
    <LoginContainer>
      {showAlert && (
        <AlertContainer>
          <Alert borderRadius={['2xl']} status="error">
            <AlertIcon />
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        </AlertContainer>
      )}

      <FormContainer>
        <H2>Login</H2>
        <Box>
          <LoginForm setShowAlert={setShowAlert} setErrorMessage={setErrorMessage} />
        </Box>
        <Text>
          Forgot your password? Click <Link to="/reset-password"> here </Link>
          to reset it.
        </Text>
      </FormContainer>
    </LoginContainer>
  )
}

Login.defaultProps = {
  className: undefined,
  children: undefined,
}

export default Login
