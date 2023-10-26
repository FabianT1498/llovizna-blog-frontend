import React from 'react'
import { chakra, Alert as ChakraAlert } from '@chakra-ui/react'

const alertContainerStyles = {
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  h: 'full',
}

const AlertContainer = chakra(ChakraAlert, { baseStyle: alertContainerStyles })

export { AlertContainer }
