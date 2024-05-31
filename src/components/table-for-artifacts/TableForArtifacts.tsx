import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks"
import styles from "./TableForArtifacts.module.scss"
import { getArtifacts } from "@/store/artifacts-data/artifacts-data.selectors"
import { fetchArtifacts } from "@/store/artifacts-data/api-action"
import { useEffect } from "react"
import { DownloadFileIcon } from "@/assets"
import { useNavigate } from "react-router-dom"
import { AppRoute } from "@/app/constants/AppRoute"

const TableForArtifacts = () => {
  const dispatch = useAppDispatch()
  const artifacts = useAppSelector(getArtifacts)
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchArtifacts())
  }, [dispatch])

  const handleRowClick = (id: string) => {
    navigate(`${AppRoute.ABOUT_ARTIFACT}/${id}`)
  }

  const handleDownloadClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, path: string) => {
    e.stopPropagation()
    if (!path) {
      return
    }
    const link = document.createElement('a')
    link.href = `${import.meta.env.VITE_API_BASE_URL}/${path}`
    link.download = ''
    link.click()
  }

  return (
    <>
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
            <tr key={index} onClick={() => handleRowClick(item.id)}>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.dateUpdate}</td>
              <td>
                  <button
                    className={styles.downloadButton}
                    onClick={(e) => handleDownloadClick(e, item.path)}
                  >
                    <DownloadFileIcon />
                    {item.fileName}
                  </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default TableForArtifacts
