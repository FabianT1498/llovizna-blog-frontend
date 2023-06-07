import styled from 'styled-components'

import { Theme } from '@styles/theme/typings/theme.interface'

type Props = {
  theme: Theme,
}

const headingStyles = `
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  margin: 0;
`

export const H1 = styled.h1`
  ${headingStyles}
  font-size: ${({ theme }: Props) => theme.fontSizes.headings.H1};
`

export const H2 = styled.h2`
  ${headingStyles}
  font-size:${({ theme }: Props) => theme.fontSizes.headings.H2};
`

export const H3 = styled.h3`
  ${headingStyles}
  font-size:${({ theme }: Props) => theme.fontSizes.headings.H3};
`

export const H4 = styled.h4`
  ${headingStyles}
  font-size:${({ theme }: Props) => theme.fontSizes.headings.H4};
`
