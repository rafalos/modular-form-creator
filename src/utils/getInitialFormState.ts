import type { Field, FormState } from '../types'

export const getInitialFormState = (fields: Field[]): FormState => {
  return fields.reduce((acc, field) => {
    acc[field.name] = field.value

    return acc
  }, {} as FormState)
}
