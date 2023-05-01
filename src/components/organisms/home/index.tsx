import * as React from 'react'
import classnames from 'classnames'
import Image from '_components/atoms/image'
import Product from '_components/molecules/product'

import styles from './style.css'

type Props = {
  children?: React.Node,
  className?: string,
}

const Home = (props: Props): React.Element<*> => {
  return (
    <div className={classnames(props.className)}>
      <Image
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        size="big"
        type="hero"
      />
      <div className={styles.container}>
        <Product
          className={styles.item}
          id="123213lldsd"
          price={200}
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />

        <Product
          className={styles.item}
          id="890232nd"
          price={300}
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />

        <Product
          className={styles.item}
          id="12ndksd41"
          price={199}
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />

        <Product
          className={styles.item}
          id="12321341"
          price={150}
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
      </div>
    </div>
  )
}

Home.defaultProps = {
  className: undefined,
  children: undefined,
}

export default Home
