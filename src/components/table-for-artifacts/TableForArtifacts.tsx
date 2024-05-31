import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks"
import styles from "./TableForArtifacts.module.scss"
import { getArtifacts, getArtifactsDataLoadingStatus } from "@/store/artifacts-data/artifacts-data.selectors"
import { fetchArtifacts } from "@/store/artifacts-data/api-action"
import { useEffect } from "react"
import { DownloadFileIcon } from "@/assets"
import { useNavigate } from "react-router-dom"
import { AppRoute } from "@/app/constants/AppRoute"
import { Spinner } from "@/components"
import useFormattedDate from "@/hooks/useFormattedDate"

const TableForArtifacts = () => {
  const dispatch = useAppDispatch()
  const artifacts = useAppSelector(getArtifacts)
  const artifactsLoading = useAppSelector(getArtifactsDataLoadingStatus)
  const navigate = useNavigate()
  const { formatDate } = useFormattedDate()

  useEffect(() => {
    dispatch(fetchArtifacts())
  }, [dispatch])

  const handleRowClick = (id: string) => {
    navigate(`${AppRoute.ABOUT_ARTIFACT}/${id}`)
  }

  const handleDownloadClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, src: string) => {
    e.stopPropagation()
    if (!src) {
      return
    }
    const link = document.createElement('a')
    link.href = `${import.meta.env.VITE_API_STATIC_FILE}/${src}`
    link.download = ''
    link.click()
  }



  return (
    <>
      {artifactsLoading ? (
        <Spinner />
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Название</th>
              <th>Описание</th>
              <th>Дата изменения</th>
              <th>Файл</th>
            </tr>
          </thead>
          <tbody>
            {artifacts.map((item, index) => (
              <tr key={index} onClick={() => handleRowClick(item.id)} style={{cursor: "pointer"}}>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{formatDate(item.dateUpdated)}</td>
                <td>
                    <button
                      className={styles.downloadButton}
                      onClick={(e) => handleDownloadClick(e, item.src)}
                    >
                      <DownloadFileIcon />
                      {item.fileName}
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  )
}

export default TableForArtifacts
