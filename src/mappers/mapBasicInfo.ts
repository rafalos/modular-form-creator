import type { BasicInfo, ModulePreviewModel } from '../types'

export const mapBasicInfo = (
  { description, email, owner, priority, resourceName }: BasicInfo,
  id: number,
): ModulePreviewModel => ({
  title: 'Basic info',
  editRoute: `/resources/${id}/basic-info`,
  fields: [
    {
      label: 'Resource name',
      name: 'resourceName',
      value: resourceName,
    },
    {
      label: 'Owner',
      name: 'owner',
      value: owner,
    },
    {
      label: 'Email',
      name: 'email',
      value: email,
    },
    {
      label: 'Description',
      name: 'description',
      value: description,
    },
    {
      label: 'Priority',
      name: 'priority',
      value: priority || 'low',
    },
  ],
})
