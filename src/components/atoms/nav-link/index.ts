/* @flow */
import * as React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

import styles from './style.css'

export const NavLinkTheme = {
  DEFAULT: 'default',
  BUTTON: 'button',
}

export const NavLinkSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
}

export const NavLinkWidth = {
  FULL: 'full',
}

type Props = {
  theme: string,
  size: string,
  width: string,
  to: string,
  children: React.Node,
  className: string,
}

const NavLink = (props: Props): React.Element<*> => {
  const { children, theme, width, size, to, className } = props
  const classProps: string = classnames(
    styles.link,
    styles[theme],
    styles[size],
    styles[width],
    className
  )

  return (
    <Link to={to} className={classProps}>
      {children}
    </Link>
  )
}

NavLink.defaultProps = {
  theme: NavLinkTheme.DEFAULT,
  to: '/',
  className: '',
}

export default NavLink
