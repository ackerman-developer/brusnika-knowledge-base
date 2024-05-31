import { createAsyncThunk } from "@reduxjs/toolkit";
import { ArtifactData } from "@/types/artifacts-data.ts";
import { AppDispatch, RootState } from "@/types/redux-types.ts";
import { AxiosInstance } from "axios";
import { APIRoute } from "@/app/constants/ApiRoute.ts";

export interface IPostArtifactData {
  title: string
  description: string
  file: File
}

export const createArtifact = createAsyncThunk<ArtifactData, IPostArtifactData, {
  dispatch: AppDispatch
  state: RootState
  extra: AxiosInstance
}>(
  'artifactsData/createArtifact',
  async (postData, { extra: api }) => {
    const formData = new FormData()
    formData.append('title', postData.title)
    formData.append('description', postData.description)
    formData.append('file', postData.file)

    const { data } = await api.post<ArtifactData>(APIRoute.artifact, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    return data;
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
