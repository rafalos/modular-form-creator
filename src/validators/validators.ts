import { EMAIL_REGEX, INTEGER_REGEX, NAME_REGEX, OWNER_REGEX } from '../constants'
import type { BasicInfo, ProjectDetails, Resource, Validator } from '../types'

export const validateResourceCompletion = ({ basicInfo, projectDetails }: Resource) => {
  return (
    validateBasicInfoCompletion(basicInfo) &&
    validateProjectDetailsCompletion(projectDetails)
  )
}

export const validateBasicInfoCompletion = (data: BasicInfo) =>
  !!data.description &&
  !!data.email &&
  !!data.owner &&
  !!data.priority &&
  !!data.resourceName

export const validateProjectDetailsCompletion = (data: ProjectDetails) =>
  data.options.length > 0 && !!data.budget && !!data.category && !!data.projectName

export const validateResourceName: Validator = (value: unknown) => {
  if (typeof value !== 'string') {
    return 'Incorrect value type'
  }
  const trimmedValue = value.trim()
  if (!trimmedValue) {
    return 'Resource name is required'
  }
  if (trimmedValue.length > 255) {
    return 'Resource name must be at most 255 characters long'
  }
  if (!NAME_REGEX.test(trimmedValue)) {
    return 'resourceName can contain only letters, numbers, spaces, and hyphens'
  }
  return null
}

export const validateOwner: Validator = (value: unknown) => {
  if (typeof value !== 'string') {
    return 'Incorrect value type'
  }
  const trimmed = value.trim()
  if (!trimmed) {
    return 'Owner is required'
  }
  if (trimmed.length > 255) {
    return 'Owner must be at most 255 characters long'
  }
  if (!OWNER_REGEX.test(trimmed)) {
    return 'Owner can contain only letters and spaces'
  }
  return null
}

export const validateEmail: Validator = (value: unknown) => {
  if (typeof value !== 'string') {
    return 'Incorrect value type'
  }
  const trimmed = value.trim()
  if (!trimmed) {
    return 'Email is required'
  }
  if (!EMAIL_REGEX.test(trimmed)) {
    return 'Email must be a valid email format'
  }

  return null
}

export const validateDescription: Validator = (value: unknown) => {
  if (typeof value !== 'string') {
    return 'Incorrect value type'
  }
  const trimmed = value.trim()
  if (!trimmed) {
    return 'Description is required'
  }
  if (trimmed.length > 1000) {
    return 'Description must be at most 1000 characters long'
  }
  return null
}

export const validateProjectName: Validator = (value: unknown) => {
  if (typeof value !== 'string') {
    return 'Incorrect value type'
  }
  const trimmed = value.trim()
  if (!trimmed) {
    return 'Project name is required'
  }
  if (trimmed.length > 255) {
    return 'Project name must be at most 255 characters long'
  }
  if (!NAME_REGEX.test(trimmed)) {
    return 'Project name can contain only letters, numbers, spaces, and hyphens'
  }
  return null
}

export const validateBudget: Validator = (value: unknown) => {
  if (typeof value !== 'string') {
    return 'Incorrect value type'
  }
  const trimmed = value.trim()
  if (!trimmed) {
    return 'Budget is required'
  }
  if (!INTEGER_REGEX.test(trimmed)) {
    return 'Budget must contain only integers'
  }
  return null
}
