import React, { FC, useState } from "react";
import styles from "./FormArtifact.module.scss";
import { useAppDispatch } from "@/hooks/redux-hooks";
import { createArtifact, IPostArtifactData } from "@/store/artifacts-data/api-action";

interface IFormProps {
  title: string;
  description: string;
  file: File | null;
}

interface IFormArtifactProps {
  onClose: () => void;
}

const FormArtifact: FC<IFormArtifactProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<IFormProps>({
    title: "",
    description: "",
    file: null,
  });

  const dispatch = useAppDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({
      ...formData,
      file: file,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await dispatch(createArtifact(formData as IPostArtifactData));
    onClose();
  };

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
          id="file"
          name="file"
          onChange={handleFileChange}
        />
        <label htmlFor="file">
          <span>Загрузить файл</span>
        </label>
        {formData.file && <span>{formData.file.name}</span>}
      </div>
      <div className={styles.btnSubmit}>
        <button type="submit">Создать</button>
      </div>
    </form>
  );
};

export default FormArtifact;
