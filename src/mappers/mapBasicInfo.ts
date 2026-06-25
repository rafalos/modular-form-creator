import type { BasicInfo, ModulePreviewModel } from '../types'

export const mapBasicInfo = (
  { description, email, owner, priority, resourceName }: BasicInfo,
  id: number,
): ModulePreviewModel => ({
  title: 'Basic info',
  editRoute: `/resources/${id}/basic-info`,
  fields: [
    {
      id: 1,
      label: 'Resource name',
      name: 'resourceName',
      value: resourceName,
    },
    {
      id: 2,
      label: 'Owner',
      name: 'owner',
      value: owner,
    },
    {
      id: 3,
      label: 'Email',
      name: 'email',
      value: email,
    },
    {
      id: 4,
      label: 'Description',
      name: 'description',
      value: description,
    },
    {
      id: 5,
      label: 'Priority',
      name: 'priority',
      value: priority || 'low',
    },
  ],
})
