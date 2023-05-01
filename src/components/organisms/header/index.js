// @Flow
import React from 'react'
import classnames from 'classnames'

import Nav from '_components/molecules/nav'
import SearchForm from '_components/molecules/search-form'
import Logo from '_components/atoms/logo'

import styles from './style.css'

type Props = {
  children?: React.Node,
  className?: string,
}

const Header = (props: Props): React.Element<*> => {
  return (
    <header className={classnames(styles.header, props.className)}>
      <div className={styles['logo-container']}>
        <Logo src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
      </div>
      <SearchForm />
      <Nav />
    </header>
  )
}

Header.defaultProps = {
  className: undefined,
  children: undefined,
}

export default Header
