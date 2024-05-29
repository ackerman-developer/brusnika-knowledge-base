import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { AppDispatch, RootState } from "@/types/redux-types.ts";
import { FormulasData } from "@/types/formulas-data";

export const fetchFormulas = createAsyncThunk<FormulasData[], undefined, {
  dispatch: AppDispatch
  state: RootState
  extra: AxiosInstance
}>(
  'data/fetchFormulas',
  async (__arg, {extra: api}) => {
    const {data} = await api.get<FormulasData[]>(`/`)
    return data
  },
)
