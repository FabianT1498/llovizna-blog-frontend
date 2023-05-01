/* @flow */
import * as React from 'react'
import { Link } from 'react-router-dom'

import styles from './style.css'

export const LogoSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
}

type Props = {
  size: string,
  className: string,
}

const Logo = (props: Props): React.Element<*> => {
  const { size, src, className } = props

  return (
    <Link to="/">
      <img className={styles[size]} src={src} />
    </Link>
  )
}

Logo.defaultProps = {
  size: LogoSize.SMALL,
  className: '',
}

export default Logo
