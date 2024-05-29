import { createAsyncThunk } from "@reduxjs/toolkit";
import { ArtifactData } from "@/types/artifacts-data.ts";
import artifactsData from '@/mock/artifacts.json';
import { AppDispatch, RootState } from "@/types/redux-types.ts";
// import { AxiosInstance } from "axios";
// import { APIRoute } from "@/app/constants/ApiRoute.ts";

export const fetchArtifacts = createAsyncThunk<ArtifactData[], void, {
  dispatch: AppDispatch
  state: RootState
  // extra: AxiosInstance
}>(
  'data/fetchArtifacts',
  async () => {
    return artifactsData as ArtifactData[]
  },
  // async (__arg, {extra: api}) => {
  //   const {data} = await api.get<ArtifactData[]>(`${APIRoute.artifact}/${id}`)
  //   return data
  // },
)

export const fetchArtifactByID = createAsyncThunk<ArtifactData | undefined, { id: number }, {
  dispatch: AppDispatch
  state: RootState
}>(
  'data/fetchArtifactByID',
  async ({ id }) => {
    const artifact = artifactsData.find(artifact => artifact.id === id);
    return artifact;
  }
)
