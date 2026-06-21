import type { ModulePreviewModel, ProjectDetails } from '../types'

export const mapProjectDetails = (
  { budget, category, options, projectName }: ProjectDetails,
  id: number,
): ModulePreviewModel => ({
  title: 'Project details',
  editRoute: `/resources/${id}/project-details`,
  fields: [
    {
      label: 'Project name',
      name: 'projectName',
      value: projectName,
    },
    {
      label: 'Budget',
      name: 'budget',
      value: budget,
    },
    {
      label: 'Category',
      name: 'category',
      value: category || 'internal',
    },
    {
      label: 'Options',
      name: 'options',
      value: options,
    },
  ],
})
