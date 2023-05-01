import React, { useContext } from 'react'
import moment from 'moment'
import CurrencyFormat from 'react-currency-format'
import NavLink from '_components/atoms/nav-link'
import Image from '_components/atoms/image'
import Button from '_components/atoms/button'
import Subtitle from '_components/atoms/subtitle'
import CheckoutProduct from '_components/molecules/checkout-product'

import styles from './style.css'

const Order = ({ order }): React.Element<*> => {
  return (
    <div className={styles.order}>
      <div className={styles['order-header']}>
        <Subtitle>Order</Subtitle>
        <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
        <p className={styles['order-id']}>
          <small>{order.id}</small>
        </p>
      </div>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          price={item.price}
          title={item.title}
          rating={item.rating}
          image={item.image}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => <div className={styles['order-total']}>Order Total: {value}</div>}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType="text"
        thousandSeparator
        prefix="$"
      />
    </div>
  )
}

export default Order
