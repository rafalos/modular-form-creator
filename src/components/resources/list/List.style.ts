import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { Section } from '../../../shared/Layout'

type ListSectionProps = {
  centered?: boolean
}

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const Navigator = styled(Link)`
  flex: 1;
  padding: 10px;
  border-radius: 10px;

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceAlt};
    transition: 0.2s;
  }
`

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`
export const Pagination = styled(Section)`
  display: flex;
  justify-content: space-between;
`

export const ListSection = styled(Section)<ListSectionProps>`
  display: flex;
  flex-direction: column;
  height: 600px;
  align-items: start;

  ${({ centered }) =>
    centered &&
    css`
      align-items: center;
      justify-content: center;
    `}
`
