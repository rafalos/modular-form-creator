import type { ModulePreviewModel } from '../../../types'
import { useNavigate } from 'react-router-dom'
import { Badge, Button } from '../../../design-system'
import { Group, SectionHeading } from '../../../shared/Layout'
import { ModuleWrapper } from './Overview.style'

type Props = { data: ModulePreviewModel; editable: boolean; dataComplete: boolean }

const ResourceModulePreview = ({ data, editable, dataComplete }: Props) => {
  const navigate = useNavigate()
  const { title, editRoute } = data

  return (
    <ModuleWrapper>
      <SectionHeading>{title}</SectionHeading>
      <Group>
        Status:{' '}
        <Badge variant={dataComplete ? 'success' : 'neutral'}>
          {dataComplete ? 'completed' : 'incomplete'}
        </Badge>
      </Group>

      <div>
        <Button
          disabled={!editable}
          onClick={() =>
            navigate(editRoute, {
              replace: true,
            })
          }
          variant="secondary"
        >
          Edit module
        </Button>
      </div>
    </ModuleWrapper>
  )
}

export default ResourceModulePreview
