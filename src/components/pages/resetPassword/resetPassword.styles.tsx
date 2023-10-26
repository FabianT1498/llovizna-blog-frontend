import React from 'react'
import { chakra, Container, Box } from '@chakra-ui/react'

const resetPasswordContainerStyles = {
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
const spinnerContainerStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  h: '100vh',
  bgColor: 'whiteAlpha.800',
  padding: '0',
  w: 'full',
  maxWidth: 'full',
}

const mainContainerStyles = {
  bgColor: 'white',
  borderTopRadius: '2xl',
  borderBottomRadius: { base: 'none', sm: '2xl' },
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '8',
  h: { base: '70%' },
}

const alertContainerStyles = {
  w: { base: 'full' },
  h: { base: '60%' },
  mb: { base: '5' },
}

const ResetPasswordContainer = chakra(Container, { baseStyle: resetPasswordContainerStyles })

const MainContainer = chakra(Container, { baseStyle: mainContainerStyles })

const AlertContainer = chakra(Container, { baseStyle: alertContainerStyles })

const SpinnerContainer = chakra(Box, { baseStyle: spinnerContainerStyles })

export { ResetPasswordContainer, MainContainer, AlertContainer, SpinnerContainer }
