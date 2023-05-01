// @Flow
import React, { useContext } from 'react'
import classnames from 'classnames'
import { BasketContext } from '_context/basket/basketContext'
import { AuthContext } from '_context/auth/authContext'
import Image from '_components/atoms/image'
import Subtitle from '_components/atoms/subtitle'
import Subtotal from '_components/molecules/subtotal'
import CheckoutProduct from '_components/molecules/checkout-product'

import styles from './style.css'

type Props = {
  children?: React.Node,
  className?: string,
}

const Checkout = (props: Props): React.Element<*> => {
  const { basket } = useContext(BasketContext)
  const { user } = useContext(AuthContext)

  return (
    <div className={styles.checkout}>
      <div>
        <div className={styles['ad-container']}>
          <Image
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            type="ad"
            size="big"
          />
        </div>
        <div className={styles.products}>
          <div className={styles['products-header']}>
            <Subtitle>Hello, {user ? user.email : 'Guest'}</Subtitle>
            <Subtitle type="underline"> Your shopping Basket</Subtitle>
          </div>

          {basket.length > 0 && (
            <div className={styles['products-list']}>
              {basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  price={item.price}
                  title={item.title}
                  rating={item.rating}
                  image={item.image}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <div>
        <Subtotal />
      </div>
    </div>
  )
}

Checkout.defaultProps = {
  className: undefined,
  children: undefined,
}

export default Checkout
