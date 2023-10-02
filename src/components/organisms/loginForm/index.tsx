import React from 'react'
import { useForm } from 'react-hook-form'

import { FormControl, FormErrorMessage, FormLabel, Button } from '@chakra-ui/react'

import { LoginFormContainer } from './loginForm.styles'

import { emailValidate, passwordValidate } from '@validations/authFormValidations'

import { login } from '@services/authService'

import { Label } from '@components/atoms/label/label.styles'
import { Input } from '@components/atoms/input/input.styles'

type Props = {
  children?: React.ReactNode,
  className?: string,
  setShowAlert: Function,
  setErrorMessage: Function,
}

const LoginForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const { setShowAlert, setErrorMessage } = props

  const onSubmit = async (data: any) => {
    const res = await login(data)

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
      console.log('auth correcta')
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
        // isLoading={isLoading}
        loadingText="Logging In"
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
