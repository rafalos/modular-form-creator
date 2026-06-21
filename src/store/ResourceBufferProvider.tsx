import { type ReactNode, useState } from "react"
import type { ResourceBuffer, BasicInfo, ProjectDetails } from "../types"
import { ResourceBufferContext } from "./ResourceBufferContext"

export const ResourceBufferProvider = ({ children }: { children: ReactNode }) => {
  const [buffer, setBuffer] = useState<ResourceBuffer>([])

  const updateBasicInfo = (resourceId: number, data: BasicInfo) => {
    setBuffer((prev) => ({
      ...prev,
      [resourceId]: {
        ...prev[resourceId],
        basicInfo: data,
      },
    }))
  }

  const updateProjectDetails = (resourceId: number, data: ProjectDetails) => {
    setBuffer((prev) => ({
      ...prev,
      [resourceId]: {
        ...prev[resourceId],
        projectDetails: data,
      },
    }))
  }

  const clearResourceBuffer = (resourceId: number) => {
    setBuffer((prev) => {
      const next = { ...prev }
      delete next[resourceId]

      return next
    })
  }

  return (
    <ResourceBufferContext.Provider
      value={{
        buffer,
        updateBasicInfo,
        updateProjectDetails,
        clearResourceBuffer,
      }}
    >
      {children}
    </ResourceBufferContext.Provider>
  )
}
