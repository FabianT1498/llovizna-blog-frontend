/* @flow */
import * as React from 'react'
import classnames from 'classnames'

import styles from './style.css'

type Props = {
  children?: React.Node,
  className?: string,
}

const Subtitle = (props: Props): React.Element<*> => {
  const { className, type } = props
  const classProps: string = classnames(styles.subtitle, className, styles[type])

  return <h2 className={classProps}>{props.children}</h2>
}

Subtitle.defaultProps = {
  className: '',
  children: '',
}

export default Subtitle
