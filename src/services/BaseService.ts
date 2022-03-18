import { AxiosInstance } from "axios";
import { Ref } from "vue";

export interface IBaseService<T> {
  loading: Ref<boolean>;
  axiosClient: AxiosInstance;
  requestUrl: string;
  requestData: T | null;
  fetchData?: () => void;
}
