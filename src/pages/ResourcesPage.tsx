import { useState } from 'react'
import resourceService from '../services/resource.ts'
import ResourceList from '../components/resources/list/ResourceList.tsx'
import ResourceListPagination from '../components/resources/list/ResourceListPagination.tsx'
import { Container } from '../shared/Layout.ts'
import { useResources } from '../hooks/useResources.ts'
import NewResourceForm from '../components/resources/form/NewResourceForm.tsx'
import { toast } from 'react-toastify'
import { getErrorMessage } from '../utils/getErrorMessage.ts'

const INITIAL_PAGE = 1

const ResourcePage = () => {
  const [page, setPage] = useState(INITIAL_PAGE)
  const { paginationModel, refetch, resources, loading } = useResources(page)
  const [createResourceLoading, setCreateResourceLoading] = useState(false)

  const handleCreateResource = async (name: string) => {
    try {
      setCreateResourceLoading(true)
      await resourceService.create(name)
      setPage(INITIAL_PAGE)
      refetch()
    } catch (error) {
      const errorMessage = getErrorMessage(error)
      toast.error(errorMessage)
    } finally {
      setCreateResourceLoading(false)
    }
  }

  const handleDeleteResource = async (id: number) => {
    if (!confirm('Are you sure you want to delete that resource?')) return

    await resourceService.remove(id)
    setPage(INITIAL_PAGE)
    refetch()
  }

  const handlePageChange = (newPage: number) => {
    setPage(newPage)
  }

  if (!resources) return null

  return (
    <Container>
      <NewResourceForm
        onCreateResource={handleCreateResource}
        loading={createResourceLoading}
      />
      <ResourceList
        resources={resources}
        onDeleteResource={handleDeleteResource}
        loading={loading}
      />
      {paginationModel && (
        <ResourceListPagination
          loading={loading}
          onPageChange={handlePageChange}
          paginationModel={paginationModel}
        />
      )}
    </Container>
  )
}

export default ResourcePage
