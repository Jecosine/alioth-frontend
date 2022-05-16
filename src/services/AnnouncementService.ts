import { axiosClient } from "@/utils/axios-client";
import { IBaseService } from "./BaseService";
import {
  AccessInput,
  Reply,
  RoleInput,
  UseLazyQueryReturn,
} from "@/typings/common";
import {
  Announcements,
  Announcement,
  AnnouncementInput,
  AnnouncementMinimal,
} from "@/typings/announcement";
import { UseMutationReturn } from "@vue/apollo-composable/dist/useMutation";

export interface IAnnouncementService extends IBaseService<Announcement> {
  // query
  getAnnouncements(role: RoleInput): UseLazyQueryReturn<never, Announcements>;
  announcement(
    access: AccessInput
  ): UseLazyQueryReturn<never, AnnouncementMinimal>;
  // mutation
  createAnnouncement(
    role: RoleInput,
    announcementInput: AnnouncementInput
  ): UseMutationReturn<never, AnnouncementMinimal>;
  updateAnnouncement(
    access: AccessInput,
    announcementInput: AnnouncementInput
  ): UseMutationReturn<never, AnnouncementMinimal>;
  deleteAnnouncement(
    access: AccessInput,
    announcementId: number
  ): UseMutationReturn<never, Reply<AnnouncementMinimal>>;
}

export class AnnouncementService implements IAnnouncementService {
  requestUrl = "/login";
  requestData = null;
  axiosClient = axiosClient;

  announcement(
    access: AccessInput
  ): UseLazyQueryReturn<never, AnnouncementMinimal> {
    console.log(access);
    return {} as UseLazyQueryReturn<never, AnnouncementMinimal>;
  }

  createAnnouncement(
    role: RoleInput,
    announcementInput: AnnouncementInput
  ): UseMutationReturn<never, AnnouncementMinimal> {
    console.log(role, announcementInput);
    return {} as UseMutationReturn<never, AnnouncementMinimal>;
  }

  deleteAnnouncement(
    access: AccessInput,
    announcementId: number
  ): UseMutationReturn<never, Reply<AnnouncementMinimal>> {
    console.log(access, announcementId);
    return {} as UseMutationReturn<never, Reply<AnnouncementMinimal>>;
  }

  getAnnouncements(role: RoleInput): UseLazyQueryReturn<never, Announcements> {
    console.log(role);
    return {} as UseLazyQueryReturn<never, Announcements>;
  }

  updateAnnouncement(
    access: AccessInput,
    announcementInput: AnnouncementInput
  ): UseMutationReturn<never, AnnouncementMinimal> {
    console.log(access, announcementInput);
    return {} as UseMutationReturn<never, AnnouncementMinimal>;
  }
}

export const announcementService = new AnnouncementService();
