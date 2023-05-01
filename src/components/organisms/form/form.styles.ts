import styled from 'styled-components'

import { Theme } from '@styles/theme/typings/theme.interface'

type Props = {
  theme: Theme,
  padding: string,
  margin
  // otras propiedades que recibe el componente
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${(props: Props) => props.theme.colors.grey.light['100']};
;
`


e
.form {

    label {
        font-size: 0.7rem;
        font-weight: 800;
        margin-bottom: 0.25rem;
        display: block;
    }

    .section {
        margin-bottom: 0.5rem;

        &:last-of-type {
            margin-bottom: 0.8rem;
        }
    }
}

/* THEME */

.default {
    background-color: var(--white);

    &:focus-within {
        box-shadow: 0 0 0 2px var(--color-secondary),0 0 0 3px rgba(255,153,0,.5);
    }
}
