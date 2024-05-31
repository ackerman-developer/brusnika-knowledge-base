import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "@/types/redux-types.ts";
import { FormulasData } from "@/types/formulas-data";
import { AxiosInstance } from "axios";
// import { APIRoute } from "@/app/constants/ApiRoute.ts";
import formulasData from '@/mock/formulas.json';

export const fetchFormulas = createAsyncThunk<FormulasData[], undefined, {
  dispatch: AppDispatch
  state: RootState
  extra: AxiosInstance
}>(
  'data/fetchFormulas',
  async () => {
    return formulasData as FormulasData[]
  }
  // async (__arg, {extra: api}) => {
  //   const {data} = await api.get<FormulasData[]>(APIRoute.formule)
  //   return data
  // },
)
