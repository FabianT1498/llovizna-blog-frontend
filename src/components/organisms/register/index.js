// @Flow
import React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import Logo from '_components/atoms/logo'
import Title from '_components/atoms/title'
import NavLink from '_components/atoms/nav-link'
import RegisterForm from '_components/molecules/register-form'

import styles from './style.css'

type Props = {
  children?: React.Node,
  className?: string,
}

const Register = (props: Props): React.Element<*> => {
  return (
    <div className={styles.register}>
      <div className={styles.section}>
        <Link to="/">
          <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
        </Link>
      </div>
      <div className={styles['form-container']}>
        <div className={styles.section}>
          <Title>Create account</Title>
        </div>
        <div className={styles.section}>
          <RegisterForm />
        </div>
        <div className={styles.section}>
          <p className={styles.condition}>
            By creating an account you agree to the AMAZON FAKE CLONE Conditions of Use &amp; Sale.
            Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
          </p>
        </div>
        Already have an account? <NavLink to="/login">Sign-In</NavLink>
      </div>
    </div>
  )
}

Register.defaultProps = {
  className: undefined,
  children: undefined,
}

export default Register
