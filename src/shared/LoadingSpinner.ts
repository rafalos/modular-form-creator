import { LoaderCircle } from 'lucide-react'
import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const LoadingSpinner = styled(LoaderCircle)`
  animation: ${spin} 1s linear infinite;
`
