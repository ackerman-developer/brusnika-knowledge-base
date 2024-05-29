import { combineReducers } from "@reduxjs/toolkit";
import { formulasData } from "./formulas-data/formulas-data.slice";

export const rootReducer = combineReducers({
  'formulas': formulasData.reducer
})
