import { createContext } from 'react'
import type { BasicInfo, ProjectDetails, ResourceBuffer } from '../types'


type ResourceBufferContextValue = {
  buffer:ResourceBuffer
  updateBasicInfo: (resourceId: number, data: BasicInfo) => void
  updateProjectDetails: (resourceId: number, data: ProjectDetails) => void
  clearResourceBuffer: (resourceId: number) => void;
}

export const ResourceBufferContext = createContext<ResourceBufferContextValue | null>(null)
