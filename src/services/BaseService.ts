import { AxiosInstance } from "axios";

export interface IBaseService<T> {
  axiosClient: AxiosInstance;
  // apolloClient:
  requestUrl: string;
  requestData: T | null;
  fetchData?: () => void;
}
