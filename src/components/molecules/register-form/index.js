/* @flow */
import React, { useState } from 'react'
import classnames from 'classnames'
import Input from '_components/atoms/input'
import Button from '_components/atoms/button'
import { useHistory } from 'react-router-dom'
import { db, auth } from '_app/firebase'

import styles from './style.css'

type Props = {
  children?: React.Node,
  className?: string,
}

export const RegisterFormTheme = {
  DEFAULT: 'default',
}

const RegisterForm = (props: Props): React.Element<*> => {
  const { children, theme, className } = props

  const classProps: string = classnames(styles.search, styles[theme], className)

  const history = useHistory()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('')

  const register = (e) => {
    e.preventDefault()
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth)
        history.push('/')
      })
      .catch((error) => alert(error.message))
  }

  return (
    <form className={styles.form} action="">
      <div className={styles.section}>
        <label htmlFor="email">Your name</label>
        <Input size="full" name="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div className={styles.section}>
        <label htmlFor="email">Email</label>
        <Input
          theme="login"
          size="full"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className={styles.section}>
        <label htmlFor="password">Password</label>
        <Input
          theme="login"
          size="full"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className={styles.section}>
        <label htmlFor="re-password">Re-enter password</label>
        <Input
          size="full"
          type="password"
          name="re-password"
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
        />
      </div>

      <Button type="submit" size="small" width="full" theme="product" onClick={register}>
        Create your Amazon account
      </Button>
    </form>
  )
}

RegisterForm.defaultProps = {
  theme: RegisterFormTheme.DEFAULT,
  className: '',
  children: '',
}

export default RegisterForm
