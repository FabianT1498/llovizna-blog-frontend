import styled from 'styled-components'

import { Theme } from '@styles/theme/typings/theme'
import { spacing } from '@styles/theme/constants'

type Props = {
  id?: string,
  label?: string,
  placeholder?: string,
  type?: string,
  theme: Theme,
}

const InputBase = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: blue;
  }
`

const Input = styled.input`
  margin: ${({ m, centered }: Props) => (centered ? '0 auto' : m && spacing[m] ? spacing[m] : 0)};
  padding: ${({ p }: Props) => (p && spacing[p] ? spacing[p] : 0)};
  ${({ mx }: Props) => mx && `margin-left: ${spacing[mx] ?? 0}; margin-right: ${spacing[mx] ?? 0};`}
  ${({ my }: Props) => my && `margin-top: ${spacing[my] ?? 0}; margin-bottom: ${spacing[my] ?? 0};`}
  ${({ mt }: Props) => mt && `margin-top: ${spacing[mt] ?? 0}`};
  ${({ mb }: Props) => mb && `margin-bottom: ${spacing[mb] ?? 0}`};
  ${({ ml }: Props) => ml && `margin-left: ${spacing[ml] ?? 0}`};
  ${({ mr }: Props) => mr && `margin-right: ${spacing[mr] ?? 0}`};
  ${({ px }: Props) =>
    px && `padding-left: ${spacing[px] ?? 0}; padding-right: ${spacing[px] ?? 0};`}
  ${({ py }: Props) =>
    py && `padding-top: ${spacing[py] ?? 0}; padding-bottom: ${spacing[py] ?? 0};`}
  ${({ pt }: Props) => pt && `padding-top: ${spacing[pt] ?? 0}`};
  ${({ pb }: Props) => pb && `padding-bottom: ${spacing[pb] ?? 0}`};
  ${({ pl }: Props) => pl && `padding-left: ${spacing[pl] ?? 0}`};
  ${({ pr }: Props) => pr && `padding-right: ${spacing[pr] ?? 0}`};
`
Box.defaultProps = {
  centered: true,
  mb: 'sm',
}

e
