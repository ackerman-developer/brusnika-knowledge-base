import { useAppSelector } from "@/hooks/redux-hooks"
import useArtifactID from "@/hooks/useArtifactID"
import { getArtifactDataLoadingStatus } from "@/store/artifacts-data/artifacts-data.selectors"

const AboutArtifact = () => {
  const artifact = useArtifactID()
  const artifactLoading = useAppSelector(getArtifactDataLoadingStatus)

  return (
    <>
      {artifact && !artifactLoading ?
        <>
          <p>{artifact.title}</p>
          <p>{artifact.description}</p>
          <p>{artifact.dateUpdate}</p>
        </>
      :
        <p>Документ не найден</p>
      }
    </>
  )
}

export default AboutArtifact
