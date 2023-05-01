/* @flow */
import React, { useContext } from 'react'
import classnames from 'classnames'

import Modal from '_components/molecules/modal'
import { ModalContext } from '_context/modal/modalContext'

import styles from './style.css'

const NavFlyout = (): React.Element<*> => {
  const { modal } = useContext(ModalContext)

  const { component: Component, props } = modal
  const { top, left } = props

  return (
    <div className={classnames(styles['nav-flyout'])}>
      {Component ? (
        <Modal top={top} left={left}>
          <Component />
        </Modal>
      ) : null}
    </div>
  )
}

export default NavFlyout
