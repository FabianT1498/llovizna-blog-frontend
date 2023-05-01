/* @flow */
import * as React from 'react'
import classnames from 'classnames'

import styles from './style.css'

export const InputType = {
  TEXT: 'text',
}

export const InputTheme = {
  DEFAULT: 'default',
  ROUNDED: 'rounded',
}

export const InputSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
}

type Props = {
  type: string,
  theme: string,
  size: string,
  children: React.Node,
  className: string,
  onChange: Function,
  value: string,
}

const Input = (props: Props): React.Element<*> => {
  const { type, children, value, theme, size, name, onChange, className } = props
  const classProps: string = classnames(styles.input, styles[theme], styles[size], className)

  return <input type={type} name={name} value={value} className={classProps} onChange={onChange} />
}

Input.defaultProps = {
  type: InputType.TEXT,
  theme: InputTheme.DEFAULT,
  size: InputSize.MEDIUM,
  className: '',
  onChange: () => {},
  value: '',
}

export default Input
