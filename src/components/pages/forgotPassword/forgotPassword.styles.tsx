import React from 'react'
import { chakra, Container } from '@chakra-ui/react'

const forgotPasswordContainerStyles = {
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

const formContainerStyles = {
  bgColor: 'white',
  borderTopRadius: '2xl',
  borderBottomRadius: { base: 'none', sm: '2xl' },
  display: 'flex',
  flexDirection: 'column',
  justifyContent: { base: 'space-between' },
  alignItems: 'center',
  padding: '8',
  h: { base: '60%' },
}

const alertContainerStyles = {
  w: { base: 'full' },
  h: { base: '60%' },
  mb: { base: '5' },
}

const ForgotPasswordContainer = chakra(Container, { baseStyle: forgotPasswordContainerStyles })

const FormContainer = chakra(Container, { baseStyle: formContainerStyles })

const AlertContainer = chakra(Container, { baseStyle: alertContainerStyles })

export { ForgotPasswordContainer, FormContainer, AlertContainer }
