import { DocumentNode } from "graphql";
import { UseQueryOptions } from "@vue/apollo-composable";
import {
  ApolloError,
  ApolloQueryResult,
  FetchMoreOptions,
  FetchMoreQueryOptions,
  OperationVariables,
  SubscribeToMoreOptions,
} from "@apollo/client/core";
import { Ref } from "vue";
import { ReactiveFunction } from "@vue/apollo-composable/dist/util/ReactiveFunction";

declare interface ResponseData<T> {
  code: number;
  msg: string;
  data: T | null;
}

declare interface ItemListInPage<T> {
  itemCount: number;
  pageNumber: number;
  data: Array<T>;
}

declare interface ItemListTableModel<T> {
  totalPage: number;
  itemPerPage: number;
  total: number;
  data: Map<number, ItemListInPage<T>>;
}

declare interface UseLazyQueryReturn<
  TResult,
  TVariables extends OperationVariables
> {
  load: (
    document?: DocumentNode | undefined,
    variables?: TVariables | undefined,
    options?: UseQueryOptions<TResult, TVariables> | undefined
  ) => void;
  result: Ref<TResult | undefined>;
  loading: Ref<boolean>;
  networkStatus: Ref<number | undefined>;
  error: Ref<ApolloError | null>;
  start: () => void;
  stop: () => void;
  restart: () => void;
  forceDisabled: Ref<boolean>;
  document: Ref<DocumentNode>;
  variables: Ref<TVariables | undefined>;
  options:
    | UseQueryOptions<TResult, TVariables>
    | Ref<UseQueryOptions<TResult, TVariables>>;
  query: Ref<
    | import("@apollo/client/core").ObservableQuery<TResult, TVariables>
    | null
    | undefined
  >;
  refetch: (
    variables?: TVariables | undefined
  ) => Promise<ApolloQueryResult<TResult>> | undefined;
  fetchMore: (
    options: FetchMoreQueryOptions<TVariables, TResult> &
      FetchMoreOptions<TResult, TVariables>
  ) => Promise<ApolloQueryResult<TResult>> | undefined;
  subscribeToMore: <
    TSubscriptionVariables = OperationVariables,
    TSubscriptionData = TResult
  >(
    options:
      | SubscribeToMoreOptions<
          TResult,
          TSubscriptionVariables,
          TSubscriptionData
        >
      | Ref<
          SubscribeToMoreOptions<
            TResult,
            TSubscriptionVariables,
            TSubscriptionData
          >
        >
      | ReactiveFunction<
          SubscribeToMoreOptions<
            TResult,
            TSubscriptionVariables,
            TSubscriptionData
          >
        >
  ) => void;
  onResult: (fn: (param: ApolloQueryResult<TResult>) => void) => {
    off: () => void;
  };
  onError: (fn: (param: ApolloError) => void) => {
    off: () => void;
  };
}

declare enum OauthType {
  GITHUB,
  SSO,
}
declare enum ResourceType {
  PROBLEM,
  CONTEST,
  USER,
  ANNOUNCEMENT,
  TAG,
  TEAM,
}
declare interface AuthInput {
  ownerId: number;
}
declare interface RoleInput {
  resourceId: number;
}
declare interface AccessInput {
  userId: number;
  resourceId: number;
  resourceType: ResourceType;
}
declare interface Reply<T> {
  code: number;
  message: string;
  data: T;
}
