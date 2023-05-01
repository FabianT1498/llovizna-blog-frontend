/* @flow */
import * as React from 'react'
import classnames from 'classnames'

import styles from './style.css'

type Props = {
  className: string,
}

const Image = (props: Props): React.Element<*> => {
  const { className, src, type, size } = props
  const classProps: string = classnames(className, styles[type], styles[size])

  return <img className={classProps} src={src} />
}

export default Image
