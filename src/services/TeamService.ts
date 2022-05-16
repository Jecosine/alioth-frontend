import {
  JoinTeamInvitation,
  JoinTeamRequest,
  TeamInput,
  TeamMinimal,
  Teams,
} from "@/typings/team";
import {
  AuthInput,
  Reply,
  RoleInput,
  UseLazyQueryReturn,
} from "@/typings/common";
import { axiosClient } from "@/utils/axios-client";
import { User, Users } from "@/typings/user";
import { UseMutationReturn } from "@vue/apollo-composable/dist/useMutation";
import { IBaseService } from "@/services/BaseService";
import { AxiosInstance } from "axios";

export interface ITeamService extends IBaseService<TeamMinimal> {
  // query
  getTeamByName(
    auth: AuthInput,
    teamName: string
  ): UseLazyQueryReturn<never, TeamMinimal>;

  getTeamById(
    auth: AuthInput,
    teamId: number
  ): UseLazyQueryReturn<never, TeamMinimal>;

  getAvailableTeams(auth: AuthInput): UseLazyQueryReturn<never, Teams>;

  searchTeamByName(
    auth: AuthInput,
    searchStr: string
  ): UseLazyQueryReturn<never, Teams>;

  teamMembers(
    role: RoleInput,
    teamId: number
  ): UseLazyQueryReturn<never, Users>;

  listJoinTeamRequest(
    role: RoleInput
  ): UseLazyQueryReturn<never, JoinTeamRequest>;

  listJoinTeamInvitation(
    role: RoleInput
  ): UseLazyQueryReturn<never, JoinTeamInvitation>;

  // mutation
  addTeam(
    auth: AuthInput,
    team: TeamInput
  ): UseMutationReturn<never, TeamMinimal>;

  updateTeam(
    role: RoleInput,
    team: TeamInput
  ): UseMutationReturn<never, TeamMinimal>;

  setAdmins(
    role: RoleInput,
    admins: Array<number>
  ): UseMutationReturn<never, Reply<never>>;

  removeAdmins(
    role: RoleInput,
    admins: Array<number>
  ): UseMutationReturn<never, Reply<never>>;

  addMembers(
    role: RoleInput,
    members: Array<number>
  ): UseMutationReturn<never, Reply<never>>;

  kickMembers(
    role: RoleInput,
    members: Array<number>
  ): UseMutationReturn<never, Reply<never>>;
}

class TeamService implements ITeamService {
  requestUrl = "/login";
  requestData = null;
  axiosClient: AxiosInstance = axiosClient;
  user: null | User | undefined;

  addMembers(
    role: RoleInput,
    members: Array<number>
  ): UseMutationReturn<never, Reply<never>> {
    console.log(role, members);
    return {} as UseMutationReturn<never, Reply<never>>;
  }

  addTeam(
    auth: AuthInput,
    team: TeamInput
  ): UseMutationReturn<never, TeamMinimal> {
    console.log(auth, team);
    return {} as UseMutationReturn<never, TeamMinimal>;
  }

  getAvailableTeams(auth: AuthInput): UseLazyQueryReturn<never, Teams> {
    console.log(auth);
    return {} as UseLazyQueryReturn<never, Teams>;
  }

  getTeamById(
    auth: AuthInput,
    teamId: number
  ): UseLazyQueryReturn<never, TeamMinimal> {
    console.log(auth, teamId);
    return {} as UseLazyQueryReturn<never, TeamMinimal>;
  }

  getTeamByName(
    auth: AuthInput,
    teamName: string
  ): UseLazyQueryReturn<never, TeamMinimal> {
    console.log(auth, teamName);
    return {} as UseLazyQueryReturn<never, TeamMinimal>;
  }

  kickMembers(
    role: RoleInput,
    members: Array<number>
  ): UseMutationReturn<never, Reply<never>> {
    console.log(role, members);
    return {} as UseMutationReturn<never, Reply<never>>;
  }

  listJoinTeamInvitation(
    role: RoleInput
  ): UseLazyQueryReturn<never, JoinTeamInvitation> {
    console.log(role);
    return {} as UseLazyQueryReturn<never, JoinTeamInvitation>;
  }

  listJoinTeamRequest(
    role: RoleInput
  ): UseLazyQueryReturn<never, JoinTeamRequest> {
    console.log(role);
    return {} as UseLazyQueryReturn<never, JoinTeamRequest>;
  }

  removeAdmins(
    role: RoleInput,
    admins: Array<number>
  ): UseMutationReturn<never, Reply<never>> {
    console.log(role, admins);
    return {} as UseMutationReturn<never, Reply<never>>;
  }

  searchTeamByName(
    auth: AuthInput,
    searchStr: string
  ): UseLazyQueryReturn<never, Teams> {
    console.log(auth, searchStr);
    return {} as UseLazyQueryReturn<never, Teams>;
  }

  setAdmins(
    role: RoleInput,
    admins: Array<number>
  ): UseMutationReturn<never, Reply<never>> {
    console.log(role, admins);
    return {} as UseMutationReturn<never, Reply<never>>;
  }

  teamMembers(
    role: RoleInput,
    teamId: number
  ): UseLazyQueryReturn<never, Users> {
    console.log(role, teamId);
    return {} as UseLazyQueryReturn<never, Users>;
  }

  updateTeam(
    role: RoleInput,
    team: TeamInput
  ): UseMutationReturn<never, TeamMinimal> {
    console.log(role, team);
    return {} as UseMutationReturn<never, TeamMinimal>;
  }
}

export const teamService = new TeamService();
