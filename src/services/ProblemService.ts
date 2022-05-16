import { IBaseService } from "./BaseService";
import { axiosClient } from "../utils/axios-client";
import { ref } from "vue";
import { UseMutationReturn } from "@vue/apollo-composable/dist/useMutation";
import {
  AccessInput,
  AuthInput,
  Reply,
  RoleInput,
  UseLazyQueryReturn,
} from "@/typings/common";
export interface IProblemService extends IBaseService<ProblemMinimal> {
  // query
  getAllAvailableProblems(auth: AuthInput): UseLazyQueryReturn<never, Problems>;
  contestProblem(
    access: AccessInput,
    problemId: number
  ): UseLazyQueryReturn<never, ProblemMinimal>;
  problem(
    access: AccessInput,
    problemId: number
  ): UseLazyQueryReturn<never, ProblemMinimal>;
  // getProblemsWithFilter(filter: ProblemFilter): UseMutationReturn<never, Problems>
  // mutation
  addProblem(
    role: RoleInput,
    problem: ProblemInput
  ): UseMutationReturn<never, ProblemMinimal>;
  modifyProblem(
    role: RoleInput,
    problem: ProblemInput
  ): UseMutationReturn<never, ProblemMinimal>;
  deleteProblem(
    role: RoleInput,
    problemId: number
  ): UseMutationReturn<never, Reply<never>>;
}
export class ProblemService implements IProblemService {
  loading = ref<boolean>(true);
  requestUrl = "/problem";
  requestData = null;
  axiosClient = axiosClient;

  addProblem(
    role: RoleInput,
    problem: ProblemInput
  ): UseMutationReturn<never, ProblemMinimal> {
    return {} as UseMutationReturn<never, ProblemMinimal>;
  }

  deleteProblem(
    role: RoleInput,
    problemId: number
  ): UseMutationReturn<never, Reply<never>> {
    return {} as UseMutationReturn<never, Reply<never>>;
  }

  modifyProblem(
    role: RoleInput,
    problem: ProblemInput
  ): UseMutationReturn<never, ProblemMinimal> {
    return {} as UseMutationReturn<never, ProblemMinimal>;
  }

  contestProblem(
    access: AccessInput,
    problemId: number
  ): UseLazyQueryReturn<never, ProblemMinimal> {
    return {} as UseLazyQueryReturn<never, ProblemMinimal>;
  }

  getAllAvailableProblems(
    auth: AuthInput
  ): UseLazyQueryReturn<never, Problems> {
    return {} as UseLazyQueryReturn<never, Problems>;
  }

  problem(
    access: AccessInput,
    problemId: number
  ): UseLazyQueryReturn<never, ProblemMinimal> {
    return {} as UseLazyQueryReturn<never, ProblemMinimal>;
  }
}
