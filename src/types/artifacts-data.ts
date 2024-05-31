export type ArtifactData = {
  id: string
  title: string
  description: string
  dateUpdated: string
  fileName: string
  src: string
}

export type ArtifactState = {
  artifacts: ArtifactData[]
  artifact: ArtifactData | undefined
  isArtfactsDataLoading: boolean
  isArtfactDataLoading: boolean
}

