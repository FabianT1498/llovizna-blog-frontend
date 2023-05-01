/* @flow */
import React, { useState, useContext } from 'react'
import classnames from 'classnames'
import { useHistory } from 'react-router-dom'
import { db } from '_app/firebase'
import Button from '_components/atoms/button'
import CardField from '_components/atoms/card-field'
import ErrorMessage from '_components/atoms/error-message'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '_context/basket/reducer'
import { BasketContext } from '_context/basket/basketContext'
import { AuthContext } from '_context/auth/authContext'

import styles from './style.css'

type Props = {
  children?: React.Node,
  className?: string,
}

export const PaymentFormTheme = {
  DEFAULT: 'default',
}

const PaymentForm = (props: Props): React.Element<*> => {
  const { clientSecret } = props

  const { basket, dispatch } = useContext(BasketContext)

  const { user } = useContext(AuthContext)

  const stripe = useStripe()
  const elements = useElements()

  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(true)
  const [cardComplete, setCardComplete] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState(null)

  const history = useHistory()

  const handleChange = (e) => {
    // Listen for changes in the Card Element
    // And display any errors as the customer types their card details
    setError(e.error)
    setDisabled(e.empty)
    setCardComplete(e.complete)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return
    }

    if (error) {
      elements.getElement('card').focus()
      return
    }

    if (cardComplete) {
      setProcessing(true)
    }

    setProcessing(false)

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
          basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        })

        // paymentIntent = paymen confirmation
        setPaymentMethod(paymentIntent)
        setError(null)

        dispatch({
          type: 'EMPTY_BASKET',
        })

        history.replace('/orders')
      })
      .catch((response) => {
        console.log(response)
        setError(response.data)
      })
  }

  return paymentMethod ? (
    <div className={styles.result}>
      <div className={styles['result-title']} role="alert">
        Payment successful
      </div>
      <div className={styles['result-message']}>
        Thanks for trying Stripe Elements. No money was charged, but we generated a PaymentMethod:{' '}
        {paymentMethod.id}
      </div>
    </div>
  ) : (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles['form-group']}>
        <div className={styles['card-container']}>
          <CardField onChange={handleChange} />
        </div>
      </div>

      <CurrencyFormat
        renderText={(value) => (
          <div className={styles.info}>
            <p>Order total: {value}</p>
          </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType="text"
        thousandSeparator
        prefix="$"
      />

      {error && (
        <div className={styles.info}>
          <ErrorMessage>{error.message}</ErrorMessage>
        </div>
      )}

      <Button
        type="submit"
        size="small"
        width="p-30"
        disabled={paymentMethod || disabled || processing || clientSecret === null}
      >
        {processing ? 'processing' : 'Buy now'}
      </Button>
    </form>
  )
}

PaymentForm.defaultProps = {
  theme: PaymentFormTheme.DEFAULT,
  className: '',
  children: '',
}

export default PaymentForm
