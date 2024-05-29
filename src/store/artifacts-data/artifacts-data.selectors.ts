import { ArtifactData } from "@/types/artifacts-data"
import { RootState } from "@/types/redux-types"

/*Получение всех документов, например, презентации и word отчеты*/
export const getArtifacts = (state: Pick<RootState, 'artifacts'>): ArtifactData[] => state.artifacts.artifacts
/*Получение статуса загрузки документов в состояние*/
export const getArtifactsDataLoadingStatus = (state: Pick<RootState, 'artifacts'>): boolean => state.artifacts.isArtfactsDataLoading
