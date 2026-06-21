import { Badge } from '../../../design-system'
import { Stack } from '../../../shared/Layout'
import type { Status } from '../../../types'
import { Header, SectionDataEntry } from './Details.style'

type Props = {
  name: string
  status: Status
  createdAt: string
  id: number
}

const DetailsHeading = ({ createdAt, id, name, status }: Props) => {
  const parsedDate = new Date(createdAt).toLocaleDateString('en-US')

  return (
    <Header>
      <Stack>
        <SectionDataEntry>Resource ID: {id}</SectionDataEntry>
        <SectionDataEntry>Resource name: {name}</SectionDataEntry>
        <SectionDataEntry>Created at: {parsedDate}</SectionDataEntry>
      </Stack>

      <Badge variant={status === 'completed' ? 'success' : 'neutral'}>{status}</Badge>
    </Header>
  )
}

export default DetailsHeading
