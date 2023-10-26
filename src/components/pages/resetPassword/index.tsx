import React, { useState, useEffect } from 'react'
import { Text, Spinner, Fade } from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom'

import {
  ResetPasswordContainer,
  MainContainer,
  AlertContainer,
  SpinnerContainer,
} from './resetPassword.styles'

import Link from '@components/atoms/link/link.styles'
import { H2 } from '@components/atoms/heading/heading.styles'
import Alert from '@components/molecules/alert'
import ResetPasswordForm from '@components/organisms/resetPasswordForm'

import { validateResetToken } from '@services/authService'

type Props = {
  children?: React.ReactNode,
  className?: string,
}

const ResetPassword = (props: Props) => {
  const location = useLocation()

  const queryParams = new URLSearchParams(location.search)
  const userId = queryParams.get('id') ?? ''
  const token = queryParams.get('token') ?? ''

  const [tokenValidated, setTokenValidated] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errMessage, setErrMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      navigate('/')
      return
    }

    setLoading(true)

    validateResetToken({ token }).then((res) => {
      if (!res?.error) {
        setTokenValidated(true)
      } else {
        if (typeof res.error?.message === 'string') {
          setErrMessage(res.error.message)
        } else {
          setErrMessage(res.error.message[0])
        }
      }

      setLoading(false)
    })
  }, []) // El arreglo vacío indica que no hay dependencias, por lo que se ejecuta una vez.

  return (
    <>
      {loading ? (
        <SpinnerContainer>
          <Spinner size="xl" thickness="4px" speed="0.65s" color="teal.500" />
          <Text mt="4">Please wait until the token is verified</Text>
        </SpinnerContainer>
      ) : (
        <Fade in={true} initial={{ opacity: 0 }} transition={{ enter: { duration: 0.5 } }}>
          <ResetPasswordContainer>
            {!tokenValidated ? (
              <MainContainer>
                <AlertContainer>
                  <Alert
                    title="Token is invalid or expired"
                    description={errMessage}
                    status="error"
                  />
                </AlertContainer>
                <Text>
                  Request a new <Link to="/forgot-password"> password </Link> reset
                </Text>
              </MainContainer>
            ) : (
              <MainContainer>
                <H2 mb={{ base: '6' }}>Reset password</H2>
                {!submitted ? (
                  <ResetPasswordForm userId={userId} token={token} setSubmitted={setSubmitted} />
                ) : (
                  <>
                    <AlertContainer>
                      <Alert
                        status="success"
                        title="Password changed successfully!"
                        description="Please login into your account"
                      />
                    </AlertContainer>
                    <Text>
                      Return to the <Link to="/">login</Link> page
                    </Text>
                  </>
                )}
              </MainContainer>
            )}
          </ResetPasswordContainer>
        </Fade>
      )}
    </>
  )
}

ResetPassword.defaultProps = {
  className: undefined,
  children: undefined,
}

export default ResetPassword
