import { extendBaseTheme } from '@chakra-ui/react'

import { colors } from './colors'
import { fonts } from './fonts'
import { styles } from './styles'
import { textStyles } from './textStyles'
import { breakpoints } from './breakpoints'

import {
  Button,
  Heading,
  Input,
  FormLabel,
  Container,
  FormError,
  Alert,
  Link,
  Spinner,
} from './chakraUIComponents'

const theme = extendBaseTheme({
  components: {
    Button,
    Heading,
    Input,
    FormLabel,
    Container,
    FormError,
    Alert,
    Link,
    Spinner,
  },
  textStyles,
  colors,
  fonts,
  styles,
  breakpoints,
})

export default theme
