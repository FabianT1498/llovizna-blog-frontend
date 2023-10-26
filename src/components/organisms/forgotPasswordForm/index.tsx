import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { emailValidate } from '@validations/authFormValidations'
import { FormControl, Button, Alert, AlertIcon, Container } from '@chakra-ui/react'

import { FormContainer } from './forgotPasswordForm.styles'

import { forgotPassword } from '@services/authService'

import { Input } from '@components/atoms/input/input.styles'

type Props = {
  children?: React.ReactNode,
  className?: string,
  setSubmitted: Function,
}

const ForgotPasswordForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm()

  const { setSubmitted } = props

  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const onSubmit = async (data: any) => {
    setIsLoading(true)

    const res = await forgotPassword(data)

    setIsLoading(false)

    if (res?.error && [400, 402, 403].includes(res.error.code)) {
      let message: string | string[] = res?.error?.fields?.email
        ? res?.error?.fields?.email
        : 'Invalid credential'

      if (typeof message === 'string') {
        setError(message)
      } else {
        setError(message[0])
      }
    } else {
      setSubmitted(true)
    }
  }

  const onChange = (e: any) => {
    setError('')
  }

  return (
    <Container>
      <FormContainer noValidate onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!errors.email} mb={{ base: '4' }}>
          <Input
            type="email"
            autoComplete="off"
            placeholder="example@email.com"
            {...register('email', emailValidate)}
            isInvalid={!!errors.email}
            onChange={onChange}
          />
        </FormControl>

        <Button
          type="submit"
          colorScheme="teal"
          size="md"
          w="full"
          // isLoading={isLoading}
          loadingText="Sending"
          disabled={!isDirty || !isValid || isSubmitting}
          isLoading={isLoading}
        >
          Send recovery email
        </Button>
      </FormContainer>
      {(errors?.email || error !== '') && (
        <Alert borderRadius={['2xl']} status="error" fontSize={{ base: 'sm' }}>
          <AlertIcon />
          {errors?.email?.message ? errors?.email?.message.toString() : error}
        </Alert>
      )}
    </Container>
  )
}

ForgotPasswordForm.defaultProps = {
  className: undefined,
  children: undefined,
}

export default ForgotPasswordForm
