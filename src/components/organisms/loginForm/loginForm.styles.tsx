import React from 'react'
import { chakra } from '@chakra-ui/react'

const loginFormContainerStyles = {
  display: 'flex',
  flexDirection: 'column',
}

const BaseLoginFormContainer = chakra('form')
const LoginFormContainer = (props: any) => (
  <BaseLoginFormContainer sx={loginFormContainerStyles} {...props} />
)

export { LoginFormContainer }
