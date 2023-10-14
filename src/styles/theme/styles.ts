import { mode } from '@chakra-ui/theme-tools'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'

const styles = {
  global: (props: StyleFunctionProps) => ({
    html: {
      fontSize: { base: '0.875rem', md: '1rem', lg: '1.05rem' },
    },
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('gray.100', 'gray.800')(props),
      lineHeight: 'base',
    },
  }),
}

export { styles }
