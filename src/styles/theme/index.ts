import { extendBaseTheme } from '@chakra-ui/react'

import { colors } from './colors'
import { fonts } from './fonts'
import { styles } from './styles'
import { textStyles } from './textStyles'

import { Button, Heading } from './chakraUIComponents'

const theme = extendBaseTheme({
  components: {
    Button,
    Heading,
  },
  textStyles,
  colors,
  fonts,
  styles,
})

export default theme
