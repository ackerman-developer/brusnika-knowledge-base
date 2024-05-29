export type ArtifactData = {
  id: number
  title: string
  description: string
  dateUpdate: string
  fileName: string
  path: string
}

export type ArtifactState = {
  artifacts: ArtifactData[],
  isArtfactsDataLoading: boolean
}

