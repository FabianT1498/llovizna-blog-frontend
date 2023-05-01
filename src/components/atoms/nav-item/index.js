/* @flow */
import * as React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

import styles from './style.css'

type Props = {
  to: string,
  linesText: string[],
  onClick: Function,
  onMouseEnter: Function,
  onMouseLeave: Function,
  className: string,
}

const NavItem = (props: Props): React.Element<*> => {
  const { linesText, to, onClick, onMouseEnter, onMouseLeave, children, className } = props

  return (
    <Link
      to={to}
      className={styles.item}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div>{linesText[0]}</div>
      <div>
        <span className={styles['line-two']}>{linesText[1]}</span>
      </div>
    </Link>
  )
}

NavItem.defaultProps = {
  to: '/',
  linesText: [],
  onClick: () => {},
  className: '',
}

export default NavItem
