import React, { useContext } from 'react'
import { BasketContext } from '_context/basket/basketContext'
import classnames from 'classnames'
import Image from '_components/atoms/image'
import Button from '_components/atoms/button'
import NavLink from '_components/atoms/nav-link'

import styles from './style.css'

const CheckoutProduct = (props: Props): React.Element<*> => {
  const { id, title, image, rating, price, hideButton } = props

  const { dispatch } = useContext(BasketContext)

  const removeFromBasket = () => {
    // Dispatch some item into the data layer
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id,
    })
  }

  return (
    <div className={classnames(props.className, styles.product)}>
      <div className={styles.image}>
        <Image src={image} size="big" type="product" />
      </div>
      <div className={styles.info}>
        <div className={styles.section}>
          <NavLink>{title}</NavLink>
        </div>
        <div className={styles.section}>
          <p className={styles.price}>
            <small>$</small>
            <strong>{price}</strong>
          </p>
        </div>

        {!hideButton && (
          <Button onClick={removeFromBasket} size="small" theme="product" width="p-30">
            Remove from car
          </Button>
        )}
      </div>
    </div>
  )
}

CheckoutProduct.defaultProps = {
  hideButton: false,
  className: '',
  children: '',
}

export default CheckoutProduct
