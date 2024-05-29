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
