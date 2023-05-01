/* @flow */
import * as React from 'react'
import classnames from 'classnames'

import './style.css'

import { CardElement } from '@stripe/react-stripe-js'

type Props = {
  onChange: Function,
}

const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: '#007185',
      fontWeight: 400,
      fontFamily: 'inherit',
      fontSize: 'inherit',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': {
        color: '#fce883',
      },
      '::placeholder': {
        color: '#007185',
      },
    },
    invalid: {
      iconColor: '#d92525',
      color: '#d92525',
    },
  },
}

const CardField = (props: Props): React.Element<*> => {
  const { onChange } = props

  return <CardElement options={CARD_OPTIONS} onChange={onChange} />
}

CardField.defaultProps = {
  onChange: () => {},
}

export default CardField
