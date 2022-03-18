import { axiosClient } from "@/utils/axios-client";
import { ref } from "vue";
import { IBaseService } from "./BaseService";

export class AnnouncementService implements IBaseService<Announcement> {
  loading = ref<boolean>(true);
  requestUrl = "/login";
  requestData = null;
  axiosClient = axiosClient;
  // common service for all users
  fetchAnnouncement() {
    return;
  }
  updateAnnouncementStatus() {
    return;
  }
  readAnnouncement() {
    return;
  }
  // for admin
  addAnnouncement() {
    return;
  }
  updateAnnouncement() {
    return;
  }
  deleteAnnoucement() {
    return;
  }
}

export const announcementService = new AnnouncementService();
