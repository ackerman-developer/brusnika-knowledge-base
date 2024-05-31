import React, { FC, useState } from "react";
import styles from "./FormArtifact.module.scss";
import { useAppDispatch } from "@/hooks/redux-hooks";
import { createArtifact } from "@/store/artifacts-data/api-action";
import { UploadArtifactData } from "@/types/artifacts-data";
import { DownLoadIcon } from "@/assets";

interface IFormProps {
  title: string
  description: string
  content: File | null
}

interface IFormArtifactProps {
  onClose: () => void;
}

const FormArtifact: FC<IFormArtifactProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<IFormProps>({
    title: "",
    description: "",
    content: null,
  })

  const dispatch = useAppDispatch()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData({
      ...formData,
      content: file,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await dispatch(createArtifact(formData as UploadArtifactData))
    onClose()
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputData}>
        <label htmlFor="title">Название</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.inputData}>
        <label htmlFor="description">Описание</label>
        <input
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.inputFile}>
        <input
          type="file"
          id="content"
          name="content"
          onChange={handleFileChange}
        />
        <label htmlFor="content" className={styles.fileLabel}>
          <DownLoadIcon />
          <span>Загрузить файл</span>
        </label>
        {formData.content && <span>{formData.content.name}</span>}
      </div>
      <div className={styles.btnSubmit}>
        <button type="submit">Создать</button>
      </div>
    </form>
  )
}

export default FormArtifact
