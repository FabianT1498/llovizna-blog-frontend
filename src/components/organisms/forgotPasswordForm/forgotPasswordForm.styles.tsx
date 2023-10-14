import React from 'react'
import { SystemStyleObject, chakra } from '@chakra-ui/react'

const formContainerStyles: SystemStyleObject = {
  display: 'flex',
  flexDirection: { base: 'column' },
  justifyContent: 'space-between',
  mb: { base: '4' },
}

const FormContainer = chakra('form', { baseStyle: formContainerStyles })

export { FormContainer }
