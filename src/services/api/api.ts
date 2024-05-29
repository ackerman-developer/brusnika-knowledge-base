import axios, {AxiosInstance} from 'axios'

const REQUEST_TIMEOUT = 5000

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: REQUEST_TIMEOUT,
  })

  return api
}
