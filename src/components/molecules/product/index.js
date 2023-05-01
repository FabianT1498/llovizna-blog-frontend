import React, { useContext } from 'react'
import { BasketContext } from '_context/basket/basketContext'
import classnames from 'classnames'
import NavLink from '_components/atoms/nav-link'
import Image from '_components/atoms/image'
import Button from '_components/atoms/button'

import styles from './style.css'

const Product = (props: Props): React.Element<*> => {
  const { id, title, image, rating, price } = props

  const { dispatch } = useContext(BasketContext)

  const addToBasket = () => {
    // Dispatch some item into the data layer
    dispatch({
      type: 'ADD_PRODUCT',
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    })
  }

  return (
    <div className={classnames(props.className, styles.product)}>
      <div className={styles.section}>
        <Image src={image} size="big" type="product" />
      </div>
      <div className={styles.section}>
        <NavLink>{title}</NavLink>
      </div>
      <div className={styles.section}>
        <Button onClick={addToBasket} size="small" width="p-70" theme="product">
          Add to car
        </Button>
      </div>
    </div>
  )
}

export default Product
