import { ref } from "vue";
import { IBaseService } from "./BaseService";
import { axiosClient } from "../utils/axios-client";

export class UserService implements IBaseService<UserData> {
  loading = ref<boolean>(true);
  requestUrl = "/login";
  requestData = null;
  axiosClient = axiosClient;
  user: null | UserData | undefined;
  async login(
    userData: UserData,
    callback: (data: ResponseData<UserData>) => void
  ) {
    const { data } = await axiosClient.post("/login", userData);
    this.user = data.data;
    callback(data as ResponseData<UserData>);
  }
  async register(
    userData: UserData,
    callback: (data: ResponseData<UserData>) => void
  ) {
    const { data } = await axiosClient.post("/register", userData);
    this.user = data.data;
    callback(data as ResponseData<UserData>);
  }
  async getAnnoucement() {
    return;
  }
  async getUserById(id: number) {
    return;
  }
  async getUserProfileById(id: number) {
    return;
  }
  async getUserStatistic() {
    return;
  }
}

export const userService = new UserService();
