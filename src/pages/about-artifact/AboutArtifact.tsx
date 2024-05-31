import { Spinner } from "@/components";
import { useAppSelector } from "@/hooks/redux-hooks";
import useArtifactID from "@/hooks/useArtifactID";
import useFormattedDate from "@/hooks/useFormattedDate";
import styles from './AboutArtifact.module.scss';
import { getArtifactDataLoadingStatus } from "@/store/artifacts-data/artifacts-data.selectors";
import Swal from "sweetalert2";
import { useAppDispatch } from "@/hooks/redux-hooks";
import { AppRoute } from "@/app/constants/AppRoute";
import { useNavigate } from "react-router-dom";
import { deleteArtifactByID } from "@/store/artifacts-data/api-action";
import { BackIcon, DeleteIcon, DownLoadIcon, ForwardIcon, TaskIcon, UnknowIcon } from "@/assets";

const AboutArtifact = () => {
  const artifact = useArtifactID()
  const artifactLoading = useAppSelector(getArtifactDataLoadingStatus)
  const { formatDate } = useFormattedDate()
  const staticFileBaseURL = import.meta.env.VITE_API_STATIC_FILE
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleDelete = async () => {
    try {
      const result = await Swal.fire({
        title: "Вы уверены?",
        text: "Вы не сможете это вернуть!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Да, удалите!",
        cancelButtonText: "Отмена"
      })

      if (result.isConfirmed && artifact) {
        await dispatch(deleteArtifactByID(artifact.id))
        Swal.fire({
          title: "Удалено!",
          text: "Документ был успешно удален.",
          icon: "success"
        })
        navigate(AppRoute.ARTIFACT)
      }
    } catch (error) {
      console.error('Ошибка при удалении документа:', error)
    }
  }

  return (
    <>
      {artifactLoading ? (
        <Spinner />
      ) : artifact ? (
        <div className={styles.container}>
          <div className={styles.controlBar}>
            <div className={styles.group}>
              <button><BackIcon height={"30px"} width={"36px"}/></button>
              <button><ForwardIcon height={"30px"} width={"36px"}/></button>
            </div>
            <button><DownLoadIcon height={"36px"} width={"36px"}/></button>
            <button><TaskIcon height={"30px"} width={"86px"}/></button>
            <button onClick={handleDelete}><DeleteIcon height={"36px"} width={"36px"}/></button>
          </div>
          <div className={styles.content}>
            <div className={styles.description}>
              <h1>{artifact.title}</h1>
              <p>{artifact.description}</p>
              <p>Дата изменения: {formatDate(artifact.dateUpdate)}</p>
            </div>
            <div className={styles.file}>
              {artifact.src.endsWith(".jpg") || artifact.src.endsWith(".png") ? (
                <img src={`${staticFileBaseURL}/${artifact.src}`} alt={artifact.title} />
              ) : (
                <div className={styles.unknow}>
                  <UnknowIcon />
                  <a href={`${staticFileBaseURL}/${artifact.src}`}>
                    Открыть файл/документ
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <p>Документ не найден</p>
      )}
    </>
  )
}

export default AboutArtifact
