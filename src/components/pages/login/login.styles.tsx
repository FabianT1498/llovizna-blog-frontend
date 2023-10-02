import React from 'react'
import { chakra, Container } from '@chakra-ui/react'

const loginContainerStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: { base: 'end', sm: 'center' },
  alignItems: 'center',
  h: '100vh',
  bgColor: 'brand.primary.main',
  padding: '0',
  w: 'full',
  maxWidth: 'full',
}

const alertContainerStyles = {
  w: { base: '80%' },
  mb: { base: '5' },
}

const formContainerStyles = {
  bgColor: 'white',
  borderTopRadius: '2xl',
  borderBottomRadius: { base: 'none', sm: '2xl' },
  display: 'flex',
  flexDirection: 'column',
  justifyContent: { base: 'space-between' },
  alignItems: 'center',
  padding: '8',
  h: { base: '75%', md: '80%' },
}

const BaseLoginContainer = chakra(Container)
const LoginContainer = (props: any) => <BaseLoginContainer sx={loginContainerStyles} {...props} />

const BaseFormContainer = chakra(Container)
const FormContainer = (props: any) => <BaseFormContainer sx={formContainerStyles} {...props} />

const BaseAlertContainer = chakra(Container)
const AlertContainer = (props: any) => <BaseAlertContainer sx={alertContainerStyles} {...props} />

export { LoginContainer, FormContainer, AlertContainer }
