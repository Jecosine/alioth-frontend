import { UserMinimal } from "@/typings/user";
import { TeamMinimal } from "@/typings/team";

declare interface AnnouncementMinimal {
  id: number;
  title: string;
  author: UserMinimal;
  content: string;
  createdTime: Date;
  modifiedTime: Date;
  read?: boolean;
  scope?: "global" | "group";
  type?: "very important" | "important" | "info";
}
declare interface AnnouncementField {
  accessCode: number;
}
declare interface AnnouncementEdge {
  team?: TeamMinimal;
}
declare interface Announcement
  extends AnnouncementMinimal,
    AnnouncementField,
    AnnouncementEdge {}
declare type Announcements = Array<AnnouncementMinimal>;

declare interface AnnouncementInput {
  id?: number;
  title: string;
  userId: number;
  content: string;
}
