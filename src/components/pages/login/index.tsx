import React from 'react'

import { LoginContainer, LoginCard } from './login.styles'
import { H2 } from '@components/atoms/heading/heading.styles'
import { Form } from '@components/organisms/form'

type Props = {
  children?: React.ReactNode,
  className?: string,
}

const Login = (props: Props) => {
  return (
    <LoginContainer>
      <LoginCard>
        <H2>Login</H2>
        <Form>
          <input type="text" />
        </Form>
      </LoginCard>
    </LoginContainer>
  )
}

Login.defaultProps = {
  className: undefined,
  children: undefined,
}

export default Login
