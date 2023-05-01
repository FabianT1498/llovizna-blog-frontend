/* @flow */
import * as React from 'react'
import classnames from 'classnames'

import styles from './style.css'

export const ButtonType = {
  BUTTON: 'button',
  RESET: 'reset',
  SUBMIT: 'submit',
}

export const ButtonTheme = {
  DEFAULT: 'default',
  ROUNDED: 'rounded',
  PRODUCT: 'product',
}

export const ButtonSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
}

export const ButtonWidth = {
  FULL: 'full',
}

type Props = {
  type: string,
  theme: string,
  size: string,
  width: string,
  onClick: Function,
  children: React.Node,
  className: string,
  disabled: boolean,
}

const Button = (props: Props): React.Element<*> => {
  const { type, onClick, children, theme, width, size, className, disabled } = props
  const classProps: string = classnames(
    styles.button,
    styles[theme],
    styles[size],
    styles[width],
    {
      [styles.disabled]: disabled,
    },
    className
  )

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classProps}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  type: ButtonType.BUTTON,
  theme: ButtonTheme.DEFAULT,
  size: ButtonSize.MEDIUM,
  width: ButtonWidth.FULL,
  onClick: () => {},
  className: '',
  disabled: false,
}

export default Button
