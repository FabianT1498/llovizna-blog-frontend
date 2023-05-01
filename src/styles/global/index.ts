import { createGlobalStyle, withTheme } from 'styled-components'

import { Theme } from '../theme/typings/theme.interface'
import typography from './typography'
import base from './base'

type Props = {
  theme: Theme,
  // otras propiedades que recibe el componente
}

const globalStyles = createGlobalStyle(({ theme }: Props) => {
  return `
    ${base(theme)}
    ${typography(theme)}
  `
})

export default withTheme(globalStyles)
