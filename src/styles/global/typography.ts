import { Theme } from '../theme/typings/theme.interface'

export default (theme: Theme) => `
 @font-face {
    font-family: "OpenSans";
    src: ${theme.fonts.openSans.bold};
    font-weight: 700;
    font-style: normal;
}
@font-face {
    font-family: "OpenSans";
    src:  ${theme.fonts.openSans.semiBold};
    font-weight: 600;
    font-style: normal;
}
@font-face {
    font-family: "OpenSans";
    src:  ${theme.fonts.openSans.regular};
    font-weight: 400;    /* or whatever weight you need to use for "bolder" */
}
@font-face {
    font-family: "OpenSans";
    src:  ${theme.fonts.openSans.light};
    font-weight: 300;    /* or whatever weight you need to use for "bolder" */
}

body {
    font-family: 'OpenSans', 'Lato', 'Arial', sans-serif;
    font-weight: 400;
}
`
