import type { OPTION_VALUES, PRIORITY_VALUES } from './constants'

export type Status = 'draft' | 'completed'
export type Priority = (typeof PRIORITY_VALUES)[number]
export type Option = (typeof OPTION_VALUES)[number]

export type FormState = Record<string, string | string[]>
export type Validator = (value: string | string[]) => string | null

export interface ListResourcesResponse {
  items: Resource[]
  pagination: PaginationModel
}

export type Resource = {
  resourceId: number
  name: string
  status: Status
  basicInfo: BasicInfo
  projectDetails: ProjectDetails
  createdAt: string
  updatedAt: string
}

export type ProjectDetails = {
  projectName: string
  budget: string
  category: string
  options: string[]
}

export type BasicInfo = {
  resourceName: string
  owner: string
  email: string
  description: string
  priority: Priority
}

export type PaginationModel = {
  page: number
  pageSize: number
  totalItems: number
  totalPages: number
}

export type Field = {
  name: string
  label: string
  value: string | string[]
}

export type ModulePreviewModel = {
  title: string
  editRoute: string
  fields: Field[]
}

export type ResourceBuffer = Record<
  number,
  {
    basicInfo?: BasicInfo
    projectDetails?: ProjectDetails
  }
>
