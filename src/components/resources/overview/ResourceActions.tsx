import { Button } from '../../../design-system'
import { Group, Section } from '../../../shared/Layout'
import { LoadingSpinner } from '../../../shared/LoadingSpinner'
import { ActionsWrapper } from './Overview.style'

type Props = {
  onProvisionSubmit: () => Promise<void>
  onResourceDelete: () => Promise<void>
  onResourceSave: () => Promise<void>
  provisionEnabled: boolean
  fullSaveEnabled: boolean
  loading: boolean
}

const ResourceActions = ({
  onProvisionSubmit,
  provisionEnabled,
  fullSaveEnabled,
  onResourceDelete,
  onResourceSave,
  loading,
}: Props) => {
  return (
    <Section>
      {fullSaveEnabled && 'Resource has unsaved changes'}
      <ActionsWrapper>
        <Group>
          <Button onClick={onProvisionSubmit} disabled={!provisionEnabled || loading}>
            {loading ? <LoadingSpinner /> : 'Provision'}
          </Button>
          {fullSaveEnabled && (
            <Button onClick={onResourceSave} disabled={loading}>
              {loading ? <LoadingSpinner /> : 'Submit resource changes'}
            </Button>
          )}
        </Group>

        <Button onClick={onResourceDelete} disabled={loading}>
          {loading ? <LoadingSpinner /> : 'Delete'}
        </Button>
      </ActionsWrapper>
    </Section>
  )
}

export default ResourceActions
