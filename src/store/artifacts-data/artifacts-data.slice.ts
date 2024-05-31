import { ArtifactState } from "@/types/artifacts-data";
import { createSlice } from "@reduxjs/toolkit";
import { createArtifact, fetchArtifactByID, fetchArtifacts } from "./api-action";

const initialState: ArtifactState = {
  artifacts: [],
  artifact: undefined,
  uploadArtifact: [],
  isArtfactsDataLoading: false,
  isArtfactDataLoading: false
}

export const artifactsData = createSlice({
  name: 'artifacts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createArtifact.fulfilled, (state, action) => {
        state.uploadArtifact.push(action.payload)
      })
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
