import styled from 'styled-components'

import Box from '@components/atoms/box/box.styles'

type Props = {
  direction?: string,
}

const Form = styled(Box).attrs({
  as: 'form',
})`
  display: flex;
  flex-direction: ${({ direction }: Props) => direction};
`

Form.defaultProps = {
  direction: 'column',
}

export { Form }
