/* @flow */
import React, { useContext } from 'react'

import { ModalContext } from '_context/modal/modalContext'

import styles from './style.css'

type Props = {
  top: string,
  left: string,
  children: React.children,
}

const Modal = (props: Props) => {
  const { top, left, children } = props
  const { dispatch } = useContext(ModalContext)

  const handleOnMouseEnter = () => dispatch({ type: 'SET_IS_HOVER', isHovered: true })
  const handleOnMouseLeave = () => {
    dispatch({ type: 'SET_IS_HOVER', isHovered: false })
    dispatch({
      type: 'REMOVE_MODAL',
    })
  }

  return (
    <div className={styles.modal}>
      <div
        style={{ top, left }}
        className={styles['modal-main']}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      >
        {children}
      </div>
    </div>
  )
}

export default Modal
