/* @flow */
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BasketContext } from '_context/basket/basketContext'
import classnames from 'classnames'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

import styles from './style.css'

const NavItemBasket = (props: Props): React.Element<*> => {
  const { to, children, className } = props

  const { basket } = useContext(BasketContext)

  return (
    <Link className={styles.item} to={to}>
      <ShoppingBasketIcon />
      <span className={styles.counter}>{basket?.length}</span>
    </Link>
  )
}

export default NavItemBasket
