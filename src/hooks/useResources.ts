import { useEffect, useState } from 'react'
import { type Resource, type PaginationModel } from '../types'
import resourceService from '../services/resource'

export const useResources = (page: number) => {
  const [resources, setResources] = useState<Resource[]>([])
  const [paginationModel, setPaginationModel] = useState<PaginationModel | null>(null)
  const [refetchKey, setRefetchKey] = useState(0)
  const [loading, setLoading] = useState(false)

  const refetch = () => {
    setRefetchKey((prev) => prev + 1)
  }

  useEffect(() => {
    const fetchResources = async () => {
      setLoading(true)
      const { items, pagination } = await resourceService.get(page)

      setResources(items)
      setPaginationModel(pagination)
      setLoading(false)
    }

    fetchResources()
  }, [page, refetchKey])

  return {
    resources,
    paginationModel,
    refetch,
    loading
  }
}
