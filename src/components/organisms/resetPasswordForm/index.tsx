import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { passwordValidate } from '@validations/authFormValidations'
import {
  FormControl,
  Button,
  Alert,
  AlertIcon,
  Container,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'

import { FormContainer } from './resetPasswordForm.styles'

import { resetPassword } from '@services/authService'

import { Label } from '@components/atoms/label/label.styles'
import { Input } from '@components/atoms/input/input.styles'

type Props = {
  children?: React.ReactNode,
  className?: string,
  userId: string,
  token: string,
  setSubmitted: Function,
}

const ResetPasswordForm = (props: Props) => {
  const { setSubmitted, userId, token } = props

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid },
    getValues,
  } = useForm()

  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const onSubmit = async (data: any) => {
    setIsLoading(true)
    const res = await resetPassword({ ...data, userId, token })
    setIsLoading(false)
    if (res?.error && [400, 402, 403].includes(res.error.code)) {
      let message: string | string[] = res?.error?.fields?.password
        ? res?.error?.fields?.password
        : 'Password format is not valid'
      if (typeof message === 'string') {
        setError(message)
      } else {
        setError(message[0])
      }
    } else {
      setSubmitted(true)
    }
  }

  const handleClick = () => setShowPassword(!showPassword)

  return (
    <Container p={{ base: '0' }}>
      <FormContainer noValidate onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!errors.password} mb={{ base: '4' }}>
          <Label mb={[2]}>Password</Label>
          <InputGroup>
            <Input
              autoComplete="off"
              placeholder="password"
              type={showPassword ? 'text' : 'password'}
              {...register('password', passwordValidate)}
              isInvalid={!!errors.password}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {showPassword ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>{errors?.password?.message?.toString()}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.passwordConfirmation} mb={{ base: '6' }}>
          <Label mb={[2]}>Repeat password</Label>
          <InputGroup>
            <Input
              type={showPassword ? 'text' : 'password'}
              autoComplete="off"
              placeholder="password"
              {...register('passwordConfirmation', {
                ...passwordValidate,
                validate: (value) =>
                  value === getValues('password') || "The password doesn't match",
              })}
              isInvalid={!!errors.passwordConfirmation}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {showPassword ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>{errors?.passwordConfirmation?.message?.toString()}</FormErrorMessage>
        </FormControl>

        <Button
          type="submit"
          colorScheme="teal"
          size="md"
          w="full"
          loadingText="Sending"
          disabled={!isDirty || !isValid || isSubmitting}
          isLoading={isLoading}
        >
          Change password
        </Button>
      </FormContainer>
      {error !== '' && (
        <Alert borderRadius={['2xl']} status="error" fontSize={{ base: 'xs' }}>
          <AlertIcon />
          {error}
        </Alert>
      )}
    </Container>
  )
}

ResetPasswordForm.defaultProps = {
  className: undefined,
  children: undefined,
}

export default ResetPasswordForm
