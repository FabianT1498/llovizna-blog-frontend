import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useLocation } from 'react-router-dom'
import { emailValidate, passwordValidate } from '@validations/authFormValidations'
import { FormControl, FormErrorMessage, Button } from '@chakra-ui/react'

import { LoginFormContainer } from './loginForm.styles'

import { login } from '@services/authService'

import { Label } from '@components/atoms/label/label.styles'
import { Input } from '@components/atoms/input/input.styles'

type Props = {
  children?: React.ReactNode,
  className?: string,
  setShowAlert: Function,
  setErrorMessage: Function,
}

interface LocationState {
  from: {
    pathname: string;
  };
}

const LoginForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid},
  } = useForm()

  const { setShowAlert, setErrorMessage } = props

  const [ isLoading, setIsLoading ] = useState(false)

  const locationState = useLocation().state as {id: string};

  const navigate = useNavigate()

  const from = {pathname: locationState?.id ? locationState.id : '/'}

  const onSubmit = async (data: any) => {

    setIsLoading(true)

    const res = await login(data)

    setIsLoading(false)
    
    if (res?.error && res.error?.fields && [400, 402, 403].includes(res.error.code)) {
      let messagesArr = Object.values(res.error.fields)

      // Just take the first error
      let message = messagesArr[0]

      if (Array.isArray(message)) {
        message = message[0]
      }

      setShowAlert(true)
      setErrorMessage(message)
    } else {
      navigate(from)
    }
  }

  const handleInputChange = (e: any) => {
    setShowAlert(false)
  }

  return (
    <LoginFormContainer noValidate onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.email} mb={['4']}>
        <Label mb={[2]}>Email</Label>
        <Input
          type="email"
          autoComplete="off"
          placeholder="example@email.com"
          {...register('email', emailValidate)}
          isInvalid={!!errors.email}
          onChange={handleInputChange}
        />
        <FormErrorMessage>{errors?.email?.message?.toString()}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.password} mb={['4']}>
        <Label mb={[2]}>Password</Label>
        <Input
          type="password"
          placeholder="password123"
          {...register('password', passwordValidate)}
          onChange={handleInputChange}
        />
        <FormErrorMessage>{errors?.password?.message?.toString()}</FormErrorMessage>
      </FormControl>
      <Button
        type="submit"
        colorScheme="teal"
        size="md"
        w="full"
        isLoading={isLoading}
        loadingText="Logging In"
        disabled={!isDirty || !isValid || isSubmitting}
      >
        Log In
      </Button>
    </LoginFormContainer>
  )
}

LoginForm.defaultProps = {
  className: undefined,
  children: undefined,
}

export default LoginForm
