import { combineReducers } from "@reduxjs/toolkit";
import { formulasData } from "./formulas-data/formulas-data.slice";
import { artifactsData } from "./artifacts-data/artifacts-data.slice";

export const rootReducer = combineReducers({
  'formulas': formulasData.reducer,
  'artifacts': artifactsData.reducer
})
