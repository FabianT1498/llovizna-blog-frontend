/* @flow */
import React from 'react'

import NavLink from '_components/atoms/nav-link'
import Subtitle from '_components/atoms/subtitle'

import styles from './style.css'

const AccountList = () => {
  return (
    <section className={styles['account-options']}>
      <div className={styles['section-auth']}>
        <NavLink size="small" width="p-30" theme="button" to="/login">
          Sign In
        </NavLink>
        <p>
          New customer? <NavLink to="/login">Start here</NavLink>
        </p>
      </div>
      <div className={styles['section-options']}>
        <div>
          <Subtitle>Your List</Subtitle>
          <ul className={styles.list}>
            <li>
              <NavLink to="#">Create a List</NavLink>
            </li>
            <li>
              <NavLink to="#">Find a List or Registry</NavLink>
            </li>
            <li>
              <NavLink to="#">AmazonSmile Charity Lists</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <Subtitle>Your account</Subtitle>
          <ul className={styles.list}>
            <li>
              <NavLink to="#">Account</NavLink>
            </li>
            <li>
              <NavLink to="#">Orders</NavLink>
            </li>
            <li>
              <NavLink to="#">Recommendations</NavLink>
            </li>
            <li>
              <NavLink to="#">Browsing History</NavLink>
            </li>
            <li>
              <NavLink to="#">Watchlist</NavLink>
            </li>
            <li>
              <NavLink to="#">Video Purchases & Rentals</NavLink>
            </li>
            <li>
              <NavLink to="#">Kindle Unlimited</NavLink>
            </li>
            <li>
              <NavLink to="#">Content & Devices</NavLink>
            </li>
            <li>
              <NavLink to="#">Subscribe & Save items</NavLink>
            </li>
            <li>
              <NavLink to="#">Memberships & Subscriptions</NavLink>
            </li>
            <li>
              <NavLink to="#">Music Library</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AccountList
