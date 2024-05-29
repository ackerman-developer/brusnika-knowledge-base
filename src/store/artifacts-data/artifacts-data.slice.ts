import { ArtifactState } from "@/types/artifacts-data";
import { createSlice } from "@reduxjs/toolkit";
import { fetchArtifactByID, fetchArtifacts } from "./api-action";

const initialState: ArtifactState = {
  artifacts: [],
  artifact: undefined,
  isArtfactsDataLoading: false,
  isArtfactDataLoading: false
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
      .addCase(fetchArtifactByID.pending, (state) => {
        state.isArtfactDataLoading = true
      })
      .addCase(fetchArtifactByID.fulfilled, (state, action) => {
        state.artifact = action.payload
        state.isArtfactDataLoading = false
      })
  }
})
