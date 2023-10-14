import React from 'react'
import { AlertIcon, AlertTitle, AlertDescription, AlertStatus } from '@chakra-ui/react'
import { AlertContainer } from './alert.styles'

const alertContainerStyles = {
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
}

type Props = {
  children?: React.ReactNode,
  className?: string,
  status: AlertStatus,
  variant: string,
  borderRadius: '',
  title?: string,
  description?: string,
}

const Alert = ({ status, variant, borderRadius, title, description }: Props) => (
  <AlertContainer status={status} variant={variant} borderRadius={borderRadius}>
    <AlertIcon boxSize="40px" mr={0} />
    {title && (
      <AlertTitle mt={4} mb={1} fontSize="lg">
        {title}
      </AlertTitle>
    )}
    {<AlertDescription maxWidth="sm">{description}</AlertDescription>}
  </AlertContainer>
)

Alert.defaultProps = {
  className: undefined,
  children: undefined,
  status: 'success',
  variant: 'subtle',
  borderRadius: '2xl',
}

export default Alert
