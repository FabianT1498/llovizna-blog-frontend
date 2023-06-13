import React from 'react'

// import { LoginContainer, LoginCard } from './login.styles'
// import { Form } from '@components/organisms/form'

import { H2 } from '@components/atoms/heading/heading.styles'

type Props = {
  children?: React.ReactNode,
  className?: string,
}

const Login = (props: Props) => {
  return <H2>Hola mundo</H2>
}

Login.defaultProps = {
  className: undefined,
  children: undefined,
}

export default Login
