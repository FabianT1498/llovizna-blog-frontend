import { Theme } from '../theme/typings/theme.interface'

export default (theme: Theme) => `
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    /* // This defines what 1rem is */
    font-size: ${theme.fontSizes.baseFontSize.medium};

    ${theme.medias.tabLand}{
      font-size: ${theme.fontSizes.baseFontSize.tabLand};
    }

    ${theme.medias.tabPort} {
      font-size: ${theme.fontSizes.baseFontSize.tabPort};
    }
  }

  body {
    box-sizing: border-box;
    background-color: ${theme.colors.primary.dark['100']};

    ${theme.medias.tabPort} {
      padding: 0;
    }
  }
`
