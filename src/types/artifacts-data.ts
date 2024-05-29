export type ArtifactData = {
  id: string
  title: string
  description: string
  dateUpdate: string
  fileName: string
  path: string
}

export type ArtifactState = {
  artifacts: ArtifactData[]
  artifact: ArtifactData | undefined
  isArtfactsDataLoading: boolean
  isArtfactDataLoading: boolean
}

