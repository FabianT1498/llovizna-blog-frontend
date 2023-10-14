import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthGuard from './guards/auth.guard'

import Login from '@components/pages/login'
import Home from '@components/pages/home'
import ForgotPassword from '@components/pages/forgotPassword'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route element={<AuthGuard />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
