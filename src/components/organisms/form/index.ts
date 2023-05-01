/* @flow */
import React from 'react'

type Props = {
  children?: React.ReactNode,
  className?: string,
}

const Form = ({ children }: Props): React.Element<*> => {
  return <form>{children}</form>
}

export default Form
