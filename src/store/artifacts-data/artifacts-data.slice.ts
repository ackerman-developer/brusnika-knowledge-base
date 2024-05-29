import { ArtifactState } from "@/types/artifacts-data";
import { createSlice } from "@reduxjs/toolkit";
import { fetchArtifacts } from "./api-action";

const initialState: ArtifactState = {
  artifacts: [],
  isArtfactsDataLoading: false
}

export const artifactsData = createSlice({
  name: 'artifacts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchArtifacts.pending, (state) => {
        state.isArtfactsDataLoading = true
      })
      .addCase(fetchArtifacts.fulfilled, (state, action) => {
        state.artifacts = action.payload
        state.isArtfactsDataLoading = false
      })
  }
})
