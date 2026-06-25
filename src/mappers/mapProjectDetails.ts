import type { ModulePreviewModel, ProjectDetails } from '../types'

export const mapProjectDetails = (
  { budget, category, options, projectName }: ProjectDetails,
  id: number,
): ModulePreviewModel => ({
  title: 'Project details',
  editRoute: `/resources/${id}/project-details`,
  fields: [
    {
      id: 1,
      label: 'Project name',
      name: 'projectName',
      value: projectName,
    },
    {
      id: 2,
      label: 'Budget',
      name: 'budget',
      value: budget,
    },
    {
      id: 3,
      label: 'Category',
      name: 'category',
      value: category || 'internal',
    },
    {
      id: 4,
      label: 'Options',
      name: 'options',
      value: options,
    },
  ],
})
