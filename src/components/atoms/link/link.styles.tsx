import React from 'react'
import { chakra } from '@chakra-ui/react'

import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'

const linkStyles = {
  color: 'teal.500',
}

const BaseLink = chakra(ChakraLink)

const Link = (props: any) => (
  <BaseLink sx={linkStyles} as={ReactRouterLink} {...props}>
    {props.children}
  </BaseLink>
)

export default Link
