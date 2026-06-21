import { Stack } from '../../../shared/Layout'
import type { ProjectDetails } from '../../../types'
import { SectionDataEntry, SectionHeading } from './Details.style'

const DetailsProjectDetails = ({
  budget,
  category,
  options,
  projectName,
}: ProjectDetails) => {
  return (
    <Stack>
      <SectionHeading>Project details</SectionHeading>

      <SectionDataEntry>
        <strong>Project name:</strong> {projectName || '- not set - '}
      </SectionDataEntry>

      <SectionDataEntry>
        <strong>Budget:</strong> {budget || '- not set - '}
      </SectionDataEntry>

      <SectionDataEntry>
        <strong>Category:</strong> {category || '- not set - '}
      </SectionDataEntry>

      <SectionDataEntry>
        <strong>Options:</strong> {options.length ? options.join(', ') : '- not set - '}
      </SectionDataEntry>
    </Stack>
  )
}

export default DetailsProjectDetails
