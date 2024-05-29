import { FormulasData } from "@/types/formulas-data"
import { RootState } from "@/types/redux-types"

/*Получение всех формул*/
export const getFormulas = (state: Pick<RootState, 'formulas'>): FormulasData[] => state.formulas.formulas
/*Получение статуса загрузки формул в состояние*/
export const getFormulasDataLoadingStatus = (state: Pick<RootState, 'formulas'>): boolean => state.formulas.isFormulasDataLoading
