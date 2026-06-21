import { Stack } from '../../../shared/Layout'
import type { BasicInfo } from '../../../types'
import { SectionDataEntry, SectionHeading } from './Details.style'

const DetailsBasicInfo = ({ description, email, owner, priority }: BasicInfo) => {
  return (
    <Stack>
      <SectionHeading>Basic information</SectionHeading>

      <SectionDataEntry>
        <strong>Owner:</strong> {owner || '- not set - '}
      </SectionDataEntry>

      <SectionDataEntry>
        <strong>Email:</strong> {email || '- not set - '}
      </SectionDataEntry>

      <SectionDataEntry>
        <strong>Description:</strong> {description || '- not set - '}
      </SectionDataEntry>

      <SectionDataEntry>
        <strong>Priority:</strong> {priority || '- not set - '}
      </SectionDataEntry>
    </Stack>
  )
}

export default DetailsBasicInfo
