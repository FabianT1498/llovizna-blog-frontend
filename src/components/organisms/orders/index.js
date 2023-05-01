// @Flow
import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '_context/auth/authContext'
import Title from '_components/atoms/title'
import Order from '_components/molecules/order'
import { db } from '_app/firebase'

import styles from './style.css'

type Props = {
  children?: React.Node,
  className?: string,
}

const Orders = (props: Props): React.Element<*> => {
  const [orders, setOrders] = useState([])
  const { user } = useContext(AuthContext)

  useEffect(() => {
    if (user) {
      db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        })
    } else {
      setOrders([])
    }
  }, [user])

  return (
    <div className={styles.orders}>
      <div className={styles['orders-header']}>
        <Title>Your orders</Title>
      </div>
      <div className={styles['orders-list']}>
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  )
}

Orders.defaultProps = {
  className: undefined,
  children: undefined,
}

export default Orders
