import Color from './typings/color.interface'

const colors: Color = {
  primary: {
    main: '#37475a',
    dark: {
      100: '#232f3e',
      200: '#131921',
    },
    light: '#007185',
  },
  secondary: {
    main: '#f90',
    dark: '#c7511f',
    light: {
      100: '#f0c14b',
      200: '#f1d388',
    },
  },
  grey: {
    light: {
      100: '#efebeb',
      200: '#dadada',
      300: '#efebeb',
    },
    dark: '#474747',
  },
  white: '#fff',
  background: '#37475a',
  text: '#efebeb' ?? '#000',
}

export default colors
