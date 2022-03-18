import { axiosClient } from "@/utils/axios-client";
import { ref } from "vue";
import { IBaseService } from "./BaseService";

export class AnnouncementService implements IBaseService<Announcement> {
  loading = ref<boolean>(true);
  requestUrl = "/login";
  requestData = null;
  axiosClient = axiosClient;
}

export const announcementService = new AnnouncementService();
