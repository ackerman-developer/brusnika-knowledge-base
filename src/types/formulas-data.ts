export type FormulasData = {
  id: number
  name: string
  content: string
  description: string
}

export type FormulasState = {
  formulas: FormulasData[],
  isFormulasDataLoading: boolean
}
