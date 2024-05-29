import { FormulasState } from "@/types/formulas-data";
import { createSlice } from "@reduxjs/toolkit";
import { fetchFormulas } from "./api-action";

const initialState: FormulasState = {
  formulas: [],
  isFormulasDataLoading: false
}

export const formulasData = createSlice({
  name: 'formulas',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFormulas.pending, (state) => {
        state.isFormulasDataLoading = true
      })
      .addCase(fetchFormulas.fulfilled, (state, action) => {
        state.formulas = action.payload
        state.isFormulasDataLoading = false
      })
  }
})
