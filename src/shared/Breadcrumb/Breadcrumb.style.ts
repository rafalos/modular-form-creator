import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CrumbContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: 'start';
  align-items: center;
  margin: 8px 0px;
`

export const CrumbLink = styled(Link)`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryStrong};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`
