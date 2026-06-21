import { useEffect, useState } from 'react'
import { useMatch, useNavigate, useParams } from 'react-router-dom'
import { Drawer } from '../design-system'
import resourceService from '../services/resource.ts'
import ResourceHeading from '../components/resources/overview/ResourceHeading.tsx'
import type { BasicInfo, FormState, ProjectDetails, Resource } from '../types.ts'
import ResourceModulePreview from '../components/resources/overview/ResourceModulePreview.tsx'
import { mapBasicInfo } from '../mappers/mapBasicInfo.ts'
import { mapProjectDetails } from '../mappers/mapProjectDetails.ts'
import ResourceDetailsForm from '../components/resources/form/ResourceDetailsForm.tsx'
import {
  validateBasicInfoCompletion,
  validateProjectDetailsCompletion,
  validateResourceCompletion,
} from '../validators/validators.ts'
import ResourceActions from '../components/resources/overview/ResourceActions.tsx'
import { useResourceBuffer } from '../hooks/useResourceBuffer.ts'
import { Section } from '../shared/Layout.ts'
import { toast } from 'react-toastify'
import { getErrorMessage } from '../utils/getErrorMessage.ts'
import Breadcrumb from '../shared/Breadcrumb/Breadcrumb.tsx'

const ResourceLayout = () => {
  const { resourceId } = useParams()
  const { updateBasicInfo, updateProjectDetails, buffer, clearResourceBuffer } =
    useResourceBuffer()

  const navigate = useNavigate()
  const [resource, setResource] = useState<Resource | null>(null)
  const [loading, setLoading] = useState(false)

  const basicInfoOpen = useMatch(`/resources/${resourceId}/basic-info`)
  const projectOpen = useMatch(`/resources/${resourceId}/project-details`)

  useEffect(() => {
    resourceService.getById(Number(resourceId)).then((resource) => setResource(resource))
  }, [resourceId])

  if (!resource) return null
  
  const handleCloseDrawer = () => {
    navigate(`/resources/${resourceId}`, {
      replace: true,
    })
  }

  const execute = async (callback: () => Promise<void>) => {
    try {
      setLoading(true)
      await callback()
    } catch (error) {
      toast.error(getErrorMessage(error))
    } finally {
      setLoading(false)
    }
  }

  const bufferEnabled = resource.status === 'completed'

  const handleUpdateBasicInfo = async (data: FormState) => {
    if (bufferEnabled) {
      updateBasicInfo(resource.resourceId, data as BasicInfo)
      handleCloseDrawer()
      return
    }

    execute(async () => {
      const updatedResource = await resourceService.updateBasicInfo(
        data as BasicInfo,
        resource.resourceId,
      )

      setResource(updatedResource)
      handleCloseDrawer()
    })
  }

  const handleUpdateProjectDetails = async (data: FormState) => {
    if (bufferEnabled) {
      updateProjectDetails(resource.resourceId, data as ProjectDetails)
      return handleCloseDrawer()
    }
    execute(async () => {
      const updatedResource = await resourceService.updateProjectDetails(
        data as ProjectDetails,
        resource.resourceId,
      )

      setResource(updatedResource)
      handleCloseDrawer()
    })
  }

  const handleProvision = async () => {
    execute(async () => {
      const updatedResource = await resourceService.provision(resource.resourceId)
      setResource(updatedResource)
    })
  }

  const handleFullSave = async () => {
    const bufferedData = buffer[resource.resourceId]

    if (!bufferedData) return

    execute(async () => {
      const { basicInfo, projectDetails } = bufferedData

      const newResource: Resource = {
        ...resource,
        basicInfo: {
          ...resource.basicInfo,
          ...basicInfo,
        },
        projectDetails: {
          ...resource.projectDetails,
          ...projectDetails,
        },
      }
      const updatedResource = await resourceService.updateResource(
        newResource,
        resource.resourceId,
      )

      clearResourceBuffer(resource.resourceId)
      setResource(updatedResource)
    })
  }

  const handleDeleteResource = async () => {
    if (!confirm('Are you sure you want to delete this resource?')) return

    execute(async () => {
      await resourceService.remove(resource.resourceId)
      navigate('/resources')
    })
  }

  const basicInfo = mapBasicInfo(
    buffer[resource.resourceId]?.basicInfo ?? resource.basicInfo,
    resource.resourceId,
  )
  const projectDetails = mapProjectDetails(
    buffer[resource.resourceId]?.projectDetails ?? resource.projectDetails,
    resource.resourceId,
  )

  const isBasicInformationCompleted = validateBasicInfoCompletion(resource.basicInfo)
  const isProjectDetailsInformationCompleted = validateProjectDetailsCompletion(
    resource.projectDetails,
  )

  const bufferedDataExists = Boolean(buffer[resource.resourceId])

  const provisionEnabled =
    validateResourceCompletion(resource) && resource.status === 'draft'

  return (
    <>
      <Breadcrumb to="/resources" title="Resource list" />
      <ResourceHeading
        id={resource.resourceId}
        name={resource.name}
        status={resource.status}
      />
      <Section>
        <ResourceModulePreview
          data={basicInfo}
          editable
          dataComplete={isBasicInformationCompleted}
        />
        <ResourceModulePreview
          dataComplete={isProjectDetailsInformationCompleted}
          data={projectDetails}
          editable={isBasicInformationCompleted}
        />
      </Section>
      <ResourceActions
        loading={loading}
        onProvisionSubmit={handleProvision}
        provisionEnabled={provisionEnabled}
        fullSaveEnabled={bufferedDataExists}
        onResourceDelete={handleDeleteResource}
        onResourceSave={handleFullSave}
      />
      <Drawer
        title="Edit basic info"
        isOpen={!!basicInfoOpen}
        onClose={handleCloseDrawer}
      >
        <ResourceDetailsForm
          loading={loading}
          key={`basic-info-${basicInfoOpen}`}
          fields={basicInfo.fields}
          onValueSubmit={handleUpdateBasicInfo}
          buffered={bufferEnabled}
        />
      </Drawer>
      <Drawer
        title="Edit project details"
        isOpen={!!projectOpen}
        onClose={handleCloseDrawer}
      >
        <ResourceDetailsForm
          loading={loading}
          key={`project-details-${projectOpen}`}
          fields={projectDetails.fields}
          onValueSubmit={handleUpdateProjectDetails}
          buffered={bufferEnabled}
        />
      </Drawer>
    </>
  )
}

export default ResourceLayout
