import styled from 'styled-components'

import { Theme } from '@styles/theme/typings/theme.interface'

type Props = {
  theme: Theme,
  // otras propiedades que recibe el componente
}

const LoginContainer = styled.div`
  font-size: 0.65rem;
  background-color: ${(props: Props) => props.theme.colors.grey.light['100']};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
`
const LoginCard = styled.div`
  width: 300px;
  height: fit-content;
  border-radius: 5px;
  border: 1px solid ${(props: Props) => props.theme.colors.grey.light['200']};
  padding: 1rem;
  margin-bottom: 1rem;
`

export { LoginContainer, LoginCard }
