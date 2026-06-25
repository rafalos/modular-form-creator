import type { Resource } from '../../../types'
import ResourceListItem from './ResourceListItem'
import { ListSection } from './List.style'
import { SectionHeading } from '../../../shared/Layout'
import { LoadingSpinner } from '../../../shared/LoadingSpinner'

type Props = {
  resources: Resource[]
  onDeleteResource: (id: number) => void
  loading: boolean
}

const ResourceList = ({ resources, onDeleteResource, loading }: Props) => {
  if(loading) return <ListSection centered><LoadingSpinner /></ListSection>
  if (resources.length === 0 && !loading) return <ListSection centered>No resources found</ListSection>

  return (
    <ListSection>
      <SectionHeading>Resources</SectionHeading>
      {resources.map((resource) => (
        <ResourceListItem resource={resource} onDeleteResource={onDeleteResource} loading={loading} key={resource.resourceId}/>
      ))}
    </ListSection>
  )
}

export default ResourceList
