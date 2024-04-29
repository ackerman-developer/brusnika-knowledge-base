import { createAsyncThunk } from "@reduxjs/toolkit";
import { ArtifactDataID } from "@/types/artifacts-data.ts";
import { AxiosInstance } from "axios";
import { AppDispatch, RootState } from "@/types/redux-types.ts";
import { APIRoute } from "@/app/constants/ApiRoute.ts";

export const fetchArtifactByID = createAsyncThunk<ArtifactDataID[], {id: string}, {
  dispatch: AppDispatch
  state: RootState
  extra: AxiosInstance
}>(
  'data/fetchArtifact',
  async ({id}, {extra: api}) => {
    const {data} = await api.get<ArtifactDataID[]>(`${APIRoute.artifact}/${id}`)
    return data
  },
)
