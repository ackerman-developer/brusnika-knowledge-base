import { Spinner } from "@/components"
import { useAppSelector } from "@/hooks/redux-hooks"
import useArtifactID from "@/hooks/useArtifactID"
import useFormattedDate from "@/hooks/useFormattedDate"
import { getArtifactDataLoadingStatus } from "@/store/artifacts-data/artifacts-data.selectors"

const AboutArtifact = () => {
  const artifact = useArtifactID()
  const artifactLoading = useAppSelector(getArtifactDataLoadingStatus)
  const { formatDate } = useFormattedDate()

  return (
    <>
      {artifactLoading ? (
        <Spinner />
      ): artifact ? (
        <>
          <p>{artifact.title}</p>
          <p>{artifact.description}</p>
          <p>{formatDate(artifact.dateUpdated)}</p>
        </>
      ) : (
        <p>Документ не найден</p>
      )
      }
    </>
  )
}

export default AboutArtifact
