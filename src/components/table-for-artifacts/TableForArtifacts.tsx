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
            <tr key={index} onClick={() => navigate(`${AppRoute.ABOUT_ARTIFACT}/${item.id}`)}>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.dateUpdate}</td>
              <td>
                <a href={`http://yourserver.com/files/${item.path}`} download>
                  <button className={styles.downloadButton}>
                    <DownloadFileIcon />
                    {item.fileName}
                  </button>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default TableForArtifacts
