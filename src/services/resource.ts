import axios from 'axios'
import type { BasicInfo, ListResourcesResponse, ProjectDetails, Resource } from '../types'

const ROOT_URL = `${import.meta.env.VITE_API_URL}/api`

const get = async (page: number) => {
  const response = await axios.get<ListResourcesResponse>(`${ROOT_URL}/resources`, {
    params: { page, sortOrder: 'desc' },
  })

  return response.data
}

const create = async (resourceName: string) => {
  const response = await axios.post<Resource>(`${ROOT_URL}/resources`, {
    resourceName,
  })

  return response.data
}

const getById = async (id: number) => {
  const response = await axios.get<Resource>(`${ROOT_URL}/resources/${id}`)

  return response.data
}

const remove = async (id: number) => {
  const response = await axios.delete<Resource>(`${ROOT_URL}/resources/${id}`)

  return response.data
}

const updateBasicInfo = async (data: BasicInfo, id: number) => {
  const response = await axios.patch<Resource>(`${ROOT_URL}/resources/${id}/basic-info`, {
    ...data,
  })

  return response.data
}

const updateProjectDetails = async (data: ProjectDetails, id: number) => {
  const response = await axios.patch<Resource>(
    `${ROOT_URL}/resources/${id}/project-details`,
    {
      ...data,
    },
  )

  return response.data
}

const updateResource = async (data: Resource, id: number) => {
  const response = await axios.put<Resource>(`${ROOT_URL}/resources/${id}`, {
    ...data,
  })

  return response.data
}

export const provision = async (id: number) => {
  const response = await axios.patch(`${ROOT_URL}/resources/${id}/provisioning`)

  return response.data
}

export default {
  get,
  create,
  getById,
  remove,
  updateBasicInfo,
  updateProjectDetails,
  provision,
  updateResource
}
