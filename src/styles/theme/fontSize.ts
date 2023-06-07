import FontSize from './typings/fontSizes.interface'

const fontSize: FontSize = {
  headings: {
    H1: '2rem', // Tamaño de fuente para los encabezados h1
    H2: '1.75rem', // Tamaño de fuente para los encabezados h2
    H3: '1.3rem', // Tamaño de fuente para los encabezados h3
    H4: '1.25rem',
  },
  baseFontSize: {
    tabPort: '100%', // 1 rem = 16px; 20px/16px = 100%
    tabLand: '112.5%', // 1 rem = 18px; 18/16 = 112.5%
    medium: '125%', // 1 rem = 20px; 20px/16px = 125%
    bigDesktop: '150%', // 1rem = 24px; 24/16 = 150%
  },
}

export default fontSize
