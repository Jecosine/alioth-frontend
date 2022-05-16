import { OperationVariables } from "@apollo/client/core";
import { OauthType } from "@/typings/common";

declare interface UserMinimal {
  id: number;
  nickname: string;
  avatar: string;
}

declare interface UserField {
  email: string;
  createdTime: Date;
}

declare interface UserEdge {
  teams: Array;
  managed: Array;
  owned: Array;
}

declare type Users = Array<UserMinimal>;
declare interface User extends UserMinimal, UserField, UserEdge {}

declare interface UserLoginForm extends OperationVariables {
  email: string;
  password: string;
  keepLogin: boolean;
  oauthType?: OauthType;
}
