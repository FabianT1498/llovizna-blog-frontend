import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: (props: any) => ({
    'html, body': {
      fontSize: 'xl',
    },
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('white', 'gray.800')(props),
      lineHeight: 'base',
    },
  }),
}

export { styles }
