import { Announcements } from "@/typings/announcement";
import { UserMinimal } from "@/typings/user";

declare interface TeamMinimal {
  id: number;
  name: string;
  description: string;
  creator: UserMinimal;
  count: number;
  createdTime: Date;
  avatar?: string;
}

declare interface TeamField {
  private: boolean;
}

declare interface TeamEdge {
  members: UserMinimal;
  admins: UserMinimal;
  announcements: Announcements;
}

declare enum JoinTeamStatus {
  PENDING,
  ACCEPTED,
  REJECTED,
  RECALLED,
}

declare interface JoinTeamRequest {
  id: number;
  applicant: UserMinimal;
  operator?: UserMinimal;
  team: TeamMinimal;
  status: JoinTeamStatus;
  createdTime: Date;
  acceptedTime?: Date;
}
declare interface JoinTeamInvitation {
  id: number;
  invitee: UserMinimal;
  inviter: UserMinimal;
  team: TeamMinimal;
  status: JoinTeamStatus;
  createdTime: Date;
  acceptedTime?: Date;
}

declare interface TeamInput {
  id?: number;
  name: string;
  description: string;
  operatorId: number;
  members?: Array<number>;
  admins?: Array<number>;
}
declare interface Team extends TeamMinimal, TeamField, TeamEdge {}

declare type Teams = Array<TeamMinimal>;
