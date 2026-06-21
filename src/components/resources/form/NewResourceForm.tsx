import { useState } from 'react'
import { Input, Button } from '../../../design-system'
import { validateResourceName } from '../../../validators/validators'
import { Section } from '../../../shared/Layout'
import { LoadingSpinner } from '../../../shared/LoadingSpinner'

type Props = {
  onCreateResource: (name: string) => void
  loading: boolean
}

const NewResourceForm = ({ onCreateResource, loading }: Props) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  const handleCreateResource = () => {
    const error = validateResourceName(value)

    if (error) {
      setError(error)
      return
    }

    onCreateResource(value)
    setValue('')
    setError('')
  }

  return (
    <Section>
      <Input
        label="Create new resource"
        placeholder="Resource name"
        value={value}
        onChange={(e) => {
          setError('')
          setValue(e.target.value)
        }}
        error={error.length > 0 ? error : undefined}
        helperText="Letters, numbers, spaces and hyphens. Max 255 characters."
      />
      <Button onClick={handleCreateResource} disabled={loading}>
        {loading ? <LoadingSpinner /> : 'Create'}
      </Button>
    </Section>
  )
}

export default NewResourceForm
