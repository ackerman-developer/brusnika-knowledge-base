import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "./redux-hooks"
import { useEffect } from "react"
import { fetchArtifactByID } from "@/store/artifacts-data/api-action"
import { getArtifact } from "@/store/artifacts-data/artifacts-data.selectors"
import { ArtifactData } from "@/types/artifacts-data"

const useArtifactID = () => {
  const {id} = useParams()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (id) {
      dispatch(fetchArtifactByID({id: id}))
    }
  }, [dispatch, id])

  const artifact = useAppSelector(getArtifact) as ArtifactData

  return artifact
}

export default useArtifactID
