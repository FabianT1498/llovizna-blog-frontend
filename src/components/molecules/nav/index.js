/* @flow */
import React, { useContext } from 'react'
import classnames from 'classnames'

import { auth } from '_app/firebase'
import NavItem from '_components/atoms/nav-item'
import NavItemBasket from '_components/atoms/nav-item-basket'
import AccountList from '_components/organisms/account-list'
import { AuthContext } from '_context/auth/authContext'
import { ModalContext } from '_context/modal/modalContext'

import styles from './style.css'

const Nav = (): React.Element<*> => {
  const { user } = useContext(AuthContext)
  const { dispatch } = useContext(ModalContext)

  const handleAuthentication = () => {
    if (user) {
      auth.signOut()
    }
  }

  const handleOnMouseEnter = (component, props) => {
    dispatch({
      type: 'SHOW_MODAL',
      component,
      props,
    })
  }

  const handleOnMouseLeave = () => {
    setTimeout(() => {
      dispatch({
        type: 'REMOVE_MODAL',
      })
    }, 100)
  }

  return (
    <nav className={classnames(styles.nav)}>
      <NavItem
        to={!user && '/login'}
        linesText={[`Hello ${user ? user.email : 'Guest'}`, user ? 'Sign Out' : 'Sign In']}
        onClick={handleAuthentication}
        onMouseEnter={() =>
          handleOnMouseEnter(AccountList, {
            top: '-6.5px',
            left: '300px',
          })
        }
        onMouseLeave={handleOnMouseLeave}
      />
      <NavItem to="/orders" linesText={['Return', '& Orders']} />
      <NavItem to="/account" linesText={['Your', 'Prime']} />
      <NavItemBasket to="/checkout" />
    </nav>
  )
}

export default Nav
