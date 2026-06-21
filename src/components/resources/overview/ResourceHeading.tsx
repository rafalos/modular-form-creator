import type { Status } from '../../../types'
import { Badge, Button } from '../../../design-system'
import { Link } from 'react-router-dom'
import { Section } from '../../../shared/Layout'

type Props = {
  name: string
  status: Status
  id: number
}

const ResourceHeading = ({ id, name, status }: Props) => {
  return (
    <Section>
      <small>Resource no. {id}</small>
      <div>Resource name: {name}</div>
      <div>
        Status: {' '}<Badge variant={status === 'completed' ? 'success' : 'neutral'}>{status}</Badge>
      </div>

      <Link to={`/resources/${id}/details`}>
        <Button size="small">View full details</Button>
      </Link>
    </Section>
  )
}

export default ResourceHeading
