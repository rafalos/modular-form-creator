import { IconButton } from '../../../design-system'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import type { PaginationModel } from '../../../types'
import { Pagination } from './List.style'
import { Group } from '../../../shared/Layout'

type Props = {
  paginationModel: PaginationModel
  onPageChange: (newPage: number) => void
  loading: boolean
}

const ResourceListPagination = ({ onPageChange, paginationModel, loading }: Props) => {
  const { page, totalItems, totalPages } = paginationModel

  const handleNextPage = () => {
    const newPage = page + 1

    onPageChange(newPage)
  }

  const handlePreviousPage = () => {
    const newPage = page - 1

    if (newPage === 0) return

    onPageChange(page - 1)
  }

  return (
    <Pagination>
      <Group>
        <IconButton onClick={handlePreviousPage} disabled={loading || page === 1}>
          <ArrowLeft />
        </IconButton>
        page {page} of {totalPages} pages
        <IconButton onClick={handleNextPage} disabled={loading || page === totalPages}>
          <ArrowRight />
        </IconButton>
      </Group>

      <Group>{totalItems} total</Group>
    </Pagination>
  )
}

export default ResourceListPagination
