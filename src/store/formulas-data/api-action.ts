import { createAsyncThunk } from "@reduxjs/toolkit";
import formulasData from '@/mock/formulas.json';
// import { AxiosInstance } from "axios";
import { AppDispatch, RootState } from "@/types/redux-types.ts";
import { FormulasData } from "@/types/formulas-data";

export const fetchFormulas = createAsyncThunk<FormulasData[], void, {
  dispatch: AppDispatch
  state: RootState
  // extra: AxiosInstance
}>(
  'data/fetchFormulas',
  async () => {
    return formulasData as FormulasData[]
  },
  // async (__arg, {extra: api}) => {
  //   const {data} = await api.get<FormulasData[]>(`/`)
  //   return data
  // },
)
