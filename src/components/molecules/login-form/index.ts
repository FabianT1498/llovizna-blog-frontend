/* @flow */
import React, { useState, useContext } from 'react'
import classnames from 'classnames'
import Input from '_components/atoms/input'
import Button from '_components/atoms/button'
import { useHistory, useLocation } from 'react-router-dom'
import { db, auth } from '_app/firebase'
import { AuthContext } from '_context/auth/authContext'

import styles from './style.css'

type Props = {
  children?: React.Node,
  className?: string,
}

export const LoginFormTheme = {
  DEFAULT: 'default',
}

const LoginForm = (props: Props): React.Element<*> => {
  const { children, theme, className } = props

  const location = useLocation()

  const history = useHistory()

  const { from } = location.state || { from: { pathname: '/' } }

  const { user, dispatch } = useContext(AuthContext)

  const classProps: string = classnames(styles.search, styles[theme], className)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = (e) => {
    e.preventDefault()
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        dispatch({ type: 'SET_USER', user: auth.user })
        history.push(from)
      })
      .catch((error) => alert(error.message))
  }

  return (
    <form className={styles.form} action="">
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

      <Button type="submit" size="small" width="full" theme="product" onClick={signIn}>
        Sign In
      </Button>
    </form>
  )
}

LoginForm.defaultProps = {
  theme: LoginFormTheme.DEFAULT,
  className: '',
  children: '',
}

export default LoginForm
