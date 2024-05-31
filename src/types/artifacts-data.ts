export type ArtifactData = {
  id: string
  title: string
  description: string
  dateUpdate: string
  fileName: string
  src: string
}

export type UploadArtifactData = {
  title: string
  description: string
  content: File
}

export type ArtifactState = {
  artifacts: ArtifactData[]
  artifact: ArtifactData | undefined
  uploadArtifact: UploadArtifactData[]
  isArtfactsDataLoading: boolean
  isArtfactDataLoading: boolean
}

