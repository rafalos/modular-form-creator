import { useEffect, useState } from 'react'
import { Section } from '../shared/Layout'
import { useParams } from 'react-router-dom'
import resourceService from '../services/resource.ts'
import type { Resource } from '../types'
import DetailsHeading from '../components/resources/details/DetailsHeading.tsx'
import DetailsProjectDetails from '../components/resources/details/DetailsProjectDetails.tsx'
import DetailsBasicInfo from '../components/resources/details/DetailsBasicInfo.tsx'
import Breadcrumb from '../shared/Breadcrumb/Breadcrumb.tsx'

const ResourceDetailsPage = () => {
  const { resourceId } = useParams()
  const [resource, setResource] = useState<Resource | null>(null)

  useEffect(() => {
    resourceService.getById(Number(resourceId)).then((resource) => setResource(resource))
  }, [resourceId])

  if (!resource) return null

  const { resourceId: id, createdAt, name, status, basicInfo, projectDetails } = resource

  return (
    <>
      <Breadcrumb title="Resource overview" to={`/resources/${resourceId}`} />
      <Section>
        <DetailsHeading id={id} createdAt={createdAt} name={name} status={status} />
        <DetailsBasicInfo {...basicInfo} />
        <DetailsProjectDetails {...projectDetails} />
      </Section>
    </>
  )
}

export default ResourceDetailsPage
