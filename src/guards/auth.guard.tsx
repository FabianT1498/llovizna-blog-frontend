import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { getAuthUser } from '@services/authService'

const AuthGuard = () => {
  const authUser = getAuthUser()
  const location = useLocation()
  return authUser ? <Outlet /> : <Navigate to={'/'} state={{ from: location }} replace />
}

export default AuthGuard
