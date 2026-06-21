import { Badge, IconButton } from '../../../design-system'
import type { Resource } from '../../../types'
import { Trash2 } from 'lucide-react'
import { Actions, Item, Navigator } from './List.style'
import { LoadingSpinner } from '../../../shared/LoadingSpinner'

type Props = {
  resource: Resource
  onDeleteResource: (id: number) => void
  loading: boolean
}

const ResourceListItem = ({ resource, onDeleteResource, loading }: Props) => {
  const { name, resourceId, status } = resource

  return (
    <Item>
      <Navigator to={`${resourceId}`}>{name}</Navigator>

      <Actions>
        <Badge variant={status === 'completed' ? 'success' : 'neutral'}>{status}</Badge>
        <IconButton
          aria-label="remove resource"
          size="small"
          onClick={() => onDeleteResource(resourceId)}
          disabled={loading}
        >
          {loading ? <LoadingSpinner /> : <Trash2 size={16} />}
        </IconButton>
      </Actions>
    </Item>
  )
}

export default ResourceListItem
