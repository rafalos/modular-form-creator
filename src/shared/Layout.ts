import { Card } from '../design-system'
import styled from 'styled-components'

export const AppShell = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 960px;
  margin: 0 auto;
`
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Group = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  gap: 1rem;
  width: 100%:
`

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%:
`

export const Section = styled(Card)`
  max-width: 960px;
  width: 100%;
`

export const SectionHeading = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
`

export const Heading = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.inkStrong};
`
