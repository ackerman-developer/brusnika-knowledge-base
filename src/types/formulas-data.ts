export type FormulasData = {
  id: string
  name: string
  content: string
  description: string
}

export type FormulasState = {
  formulas: FormulasData[],
  isFormulasDataLoading: boolean
}
