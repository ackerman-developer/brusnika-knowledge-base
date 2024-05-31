import { ArtifactData } from "@/types/artifacts-data"
import { RootState } from "@/types/redux-types"

/*Получение всех документов, например, презентации или word отчеты*/
export const getArtifacts = (state: Pick<RootState, 'artifacts'>): ArtifactData[] => state.artifacts.artifacts
/*Получение статуса загрузки документов в состояние*/
export const getArtifactsDataLoadingStatus = (state: Pick<RootState, 'artifacts'>): boolean => state.artifacts.isArtfactsDataLoading
/*Получение опеределенного документа по ID, например, презентация или word отчет*/
export const getArtifact = (state: Pick<RootState, 'artifacts'>): ArtifactData | undefined => state.artifacts.artifact
/*Получение статуса загрузки документа в состояние*/
export const getArtifactDataLoadingStatus = (state: Pick<RootState, 'artifacts'>): boolean => state.artifacts.isArtfactDataLoading
/*Удаление документа*/
export const deleteArtifact = (state: RootState, artifactId: string): ArtifactData[] => {
  // Копируем массив документов, чтобы не изменять исходный массив в состоянии
  const updatedArtifacts = [...state.artifacts.artifacts]
  // Ищем индекс документа для удаления
  const index = updatedArtifacts.findIndex(artifact => artifact.id === artifactId)
  // Если документ найден, удаляем его из массива
  if (index !== -1) {
    updatedArtifacts.splice(index, 1)
  }
  return updatedArtifacts
}
