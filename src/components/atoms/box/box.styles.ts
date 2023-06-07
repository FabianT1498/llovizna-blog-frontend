import styled from 'styled-components'

import { Theme } from '@styles/theme/typings/theme.interface'

type Props = {
  m?: string,
  p?: string,
  mx?: string,
  my?: string,
  mt?: string,
  mb?: string,
  ml?: string,
  mr?: string,
  px?: string,
  py?: string,
  pt?: string,
  pb?: string,
  pl?: string,
  pr?: string,
  centered?: boolean,
  theme: Theme,
}

const Box = styled.div`
  margin: ${({ m, centered, theme }: Props) =>
    centered ? '0 auto' : m && theme.spacing[m] ? theme.spacing[m] : 0};
  padding: ${({ p }: Props) => (p && theme.spacing[p] ? theme.spacing[p] : 0)};
  ${({ mx, theme }: Props) =>
    mx && `margin-left: ${theme.spacing[mx] ?? 0}; margin-right: ${theme.spacing[mx] ?? 0};`}
  ${({ my, theme }: Props) =>
    my && `margin-top: ${theme.spacing[my] ?? 0}; margin-bottom: ${theme.spacing[my] ?? 0};`}
  ${({ mt, theme }: Props) => mt && `margin-top: ${theme.spacing[mt] ?? 0}`};
  ${({ mb, theme }: Props) => mb && `margin-bottom: ${theme.spacing[mb] ?? 0}`};
  ${({ ml, theme }: Props) => ml && `margin-left: ${theme.spacing[ml] ?? 0}`};
  ${({ mr, theme }: Props) => mr && `margin-right: ${theme.spacing[mr] ?? 0}`};
  ${({ px, theme }: Props) =>
    px && `padding-left: ${theme.spacing[px] ?? 0}; padding-right: ${theme.spacing[px] ?? 0};`}
  ${({ py, theme }: Props) =>
    py && `padding-top: ${theme.spacing[py] ?? 0}; padding-bottom: ${theme.spacing[py] ?? 0};`}
  ${({ pt, theme }: Props) => pt && `padding-top: ${theme.spacing[pt] ?? 0}`};
  ${({ pb, theme }: Props) => pb && `padding-bottom: ${theme.spacing[pb] ?? 0}`};
  ${({ pl, theme }: Props) => pl && `padding-left: ${theme.spacing[pl] ?? 0}`};
  ${({ pr, theme }: Props) => pr && `padding-right: ${theme.spacing[pr] ?? 0}`};
`
Box.defaultProps = {
  centered: true,
  mb: 'sm',
}

export default Box
