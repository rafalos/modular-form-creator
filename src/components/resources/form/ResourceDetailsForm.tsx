import { useState } from 'react'
import type { Field, FormState } from '../../../types'
import { Button, CheckboxGroup, Input, Select } from '../../../design-system'
import { CATEGORY_VALUES, OPTION_VALUES, PRIORITY_VALUES } from '../../../constants'
import { getInitialFormState } from '../../../utils/getInitialFormState'
import { validateForm } from '../../../validators/validate'
import { Form } from './Form.style'
import { LoadingSpinner } from '../../../shared/LoadingSpinner'

type Props = {
  fields: Field[]
  onValueSubmit: (form: FormState) => void
  buffered: boolean
  loading: boolean
}

const ResourceDetailsForm = ({ fields, onValueSubmit, buffered, loading }: Props) => {
  const [form, setForm] = useState<FormState>(() => getInitialFormState(fields))
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleValueChange = (field: string, value: string | string[]) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }))

    setErrors((prev) => {
      const next = { ...prev }
      delete next[field]
      return next
    })
  }

  const onFormSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()
    const errors = validateForm(form)

    if (Object.keys(errors).length > 0) {
      setErrors(errors)
      return
    }

    onValueSubmit(form)
  }

  return (
    <Form onSubmit={(event) => onFormSubmit(event)}>
      {fields.map(({ name, label, id }) => {
        switch (name) {
          case 'priority':
            return (
              <Select
                key={id}
                value={form[name]}
                label={label}
                options={PRIORITY_VALUES.map((value) => ({
                  label: value,
                  value,
                }))}
                onChange={(event) => handleValueChange(name, event.target.value)}
              />
            )
          case 'category':
            return (
              <Select
                key={id}
                value={form[name]}
                label={label}
                options={CATEGORY_VALUES.map((value) => ({
                  label: value,
                  value,
                }))}
                onChange={(event) => handleValueChange(name, event.target.value)}
              />
            )
          case 'options':
            return (
              <CheckboxGroup
                key={id}
                value={form[name] as string[]}
                label="Options"
                onChange={(vals) => {
                  handleValueChange(name, vals)
                }}
                options={OPTION_VALUES}
              />
            )
          default:
            return (
              <Input
                key={id}
                value={form[name]}
                disabled={name === 'resourceName'}
                label={label}
                onChange={(event) => handleValueChange(name, event.target.value)}
                error={errors[name]}
              />
            )
        }
      })}

      <Button disabled={loading}>
        {loading ? <LoadingSpinner /> : buffered ? 'Save changes' : 'Submit'}
      </Button>
    </Form>
  )
}

export default ResourceDetailsForm
