import type { FormState } from '../types'
import { validationSchema } from './schema'

export const validateForm = (formState: FormState) => {
  const errors: Record<string, string> = {}

  Object.entries(formState).forEach(([field, value]) => {
    const validator = validationSchema[field as keyof typeof validationSchema]

    if(!validator) return;
    const error = validator(value)

    if (error) {
      errors[field] = error
    }
  })

  return errors
}
