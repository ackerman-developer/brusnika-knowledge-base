import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "@/types/redux-types.ts";
import { FormulasData } from "@/types/formulas-data";
import { AxiosInstance } from "axios";
import { APIRoute } from "@/app/constants/ApiRoute.ts";

export const fetchFormulas = createAsyncThunk<FormulasData[], void, {
  dispatch: AppDispatch
  state: RootState
  extra: AxiosInstance
}>(
  'data/fetchFormulas',
  async (__arg, {extra: api}) => {
    const {data} = await api.get<FormulasData[]>(APIRoute.formule)
    return data
  },
)
