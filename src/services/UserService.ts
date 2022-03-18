import { ref } from "vue";
import { IBaseService } from "./BaseService";
import { axiosClient } from "../utils/axios-client";
export interface UserData {
  name: string;
  age: string;
}
export interface ResponseData<T> {
  code: number;
  msg: string;
  data: T | null;
}
export class UserService implements IBaseService<UserData> {
  loading = ref<boolean>(true);
  requestUrl = "/login";
  requestData = null;
  axiosClient = axiosClient;
  async login(
    userData: UserData,
    callback: (data: ResponseData<UserData>) => void
  ) {
    const { data } = await axiosClient.post("/login", userData);
    callback(data as ResponseData<UserData>);
  }
  async register(
    userData: UserData,
    callback: (data: ResponseData<UserData>) => void
  ) {
    const { data } = await axiosClient.post("/register", userData);
    callback(data as ResponseData<UserData>);
  }
}
