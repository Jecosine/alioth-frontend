import { ref } from "vue";
import { IBaseService } from "./BaseService";
import { axiosClient } from "@/utils/axios-client";
import { AxiosInstance } from "axios";
import { UseMutationReturn } from "@vue/apollo-composable/dist/useMutation";
import { useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { User, UserLoginForm } from "@/typings/user";
import { AuthInput, UseLazyQueryReturn } from "@/typings/common";

export interface IUserService extends IBaseService<User> {
  login(userLoginForm: UserLoginForm): UseMutationReturn<never, UserLoginForm>;

  register(userData: User): UseMutationReturn<never, User>;

  getCurrentUser(authData: AuthInput): UseLazyQueryReturn<never, User>;
}

export class UserService implements IUserService {
  loading = ref<boolean>(true);
  requestUrl = "/login";
  requestData = null;
  axiosClient: AxiosInstance = axiosClient;
  user: null | User | undefined;

  /**
   * get mutation for login service
   * @param userLoginForm email and password
   * @return mutation for login
   */
  login(userLoginForm: UserLoginForm): UseMutationReturn<never, UserLoginForm> {
    return useMutation(
      gql`
        mutation Login($email: String!, $password: String!) {
          user: login(loginForm: { email: $email, password: $password }) {
            nickname
          }
        }
      `,
      {
        variables: userLoginForm,
      }
    );
  }

  /**
   * register
   * @param userData
   */
  register(userData: User): UseMutationReturn<never, User> {
    console.log(userData);
    return {} as UseMutationReturn<never, User>;
  }

  getCurrentUser(authData: AuthInput): UseLazyQueryReturn<never, User> {
    console.log(authData);
    return {} as UseLazyQueryReturn<never, User>;
  }
}

const userService = new UserService();
export default userService;
