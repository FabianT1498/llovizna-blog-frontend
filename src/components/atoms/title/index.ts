/* @flow */
import * as React from 'react'
import classnames from 'classnames'

import styles from './style.css'

type Props = {
  children?: React.Node,
  className?: string,
}

const Title = (props: Props): React.Element<*> => {
  const { className, type } = props
  const classProps: string = classnames(styles.title, className, styles[type])

  return <h1 className={classProps}>{props.children}</h1>
}

Title.defaultProps = {
  className: '',
  children: '',
}

export default Title
