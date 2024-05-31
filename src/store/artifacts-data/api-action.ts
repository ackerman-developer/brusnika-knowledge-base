import { createAsyncThunk } from "@reduxjs/toolkit";
import { ArtifactData, UploadArtifactData } from "@/types/artifacts-data.ts";
import { AppDispatch, RootState } from "@/types/redux-types.ts";
import { AxiosInstance } from "axios";
import { APIRoute } from "@/app/constants/ApiRoute.ts";


export const createArtifact = createAsyncThunk<UploadArtifactData, UploadArtifactData, {
  dispatch: AppDispatch
  state: RootState
  extra: AxiosInstance
}>(
  'artifactsData/createArtifact',
  async (postData, { extra: api }) => {
    const formData = new FormData()
    formData.append('title', postData.title)
    formData.append('description', postData.description)
    formData.append('content', postData.content)

    const { data } = await api.post<UploadArtifactData>(APIRoute.artifact, formData)
    return data
  },
)

export const fetchArtifacts = createAsyncThunk<ArtifactData[], undefined, {
  dispatch: AppDispatch
  state: RootState
  extra: AxiosInstance
}>(
  'data/fetchArtifacts',
  async (__arg, {extra: api}) => {
    const {data} = await api.get<ArtifactData[]>(APIRoute.artifact)
    return data
  },
)

export const fetchArtifactByID = createAsyncThunk<ArtifactData | undefined, { id: string }, {
  dispatch: AppDispatch
  state: RootState
  extra: AxiosInstance
}>(
  'data/fetchArtifactByID',
  async ({id}, {extra: api}) => {
    const {data} = await api.get<ArtifactData>(`${APIRoute.artifact}/${id}`)
    return data
  },
)
