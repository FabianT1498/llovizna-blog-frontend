import React, { useState } from 'react'
import { Text } from '@chakra-ui/react'

import { ForgotPasswordContainer, FormContainer, AlertContainer } from './forgotPassword.styles'
import Link from '@components/atoms/link/link.styles'
import ForgotPasswordForm from '@components/organisms/forgotPasswordForm'
import { H2 } from '@components/atoms/heading/heading.styles'
import Alert from '@components/molecules/alert'

type Props = {
  children?: React.ReactNode,
  className?: string,
}

const ForgotPassword = (props: Props) => {
  const [submitted, setSubmitted] = useState(false)

  return (
    <ForgotPasswordContainer>
      <FormContainer>
        <H2>Password recovery</H2>
        {!submitted ? (
          <>
            <ForgotPasswordForm setSubmitted={setSubmitted} />
            <Text>
              Do you have an <Link to="/">account</Link> ?
            </Text>
          </>
        ) : (
          <>
            <AlertContainer>
              <Alert
                title="Reset password link was submitted!"
                description="Please check out your email inbox"
              />
            </AlertContainer>
            <Text>
              Return to the <Link to="/">login</Link> page
            </Text>
          </>
        )}
      </FormContainer>
    </ForgotPasswordContainer>
  )
}

ForgotPassword.defaultProps = {
  className: undefined,
  children: undefined,
}

export default ForgotPassword
