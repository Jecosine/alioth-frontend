import { axiosClient } from "@/utils/axios-client";
import { ref } from "vue";
import { IBaseService } from "./BaseService";
export class StatisticService implements IBaseService<unknown> {
  loading = ref<boolean>(true);
  requestUrl = "/login";
  requestData = null;
  axiosClient = axiosClient;
  // base function
  getStatisticByDate() {
    return;
  }
  getStatisticInPeriod() {
    return;
  }
  getRecentSolved() {
    return;
  }
  // function for transforming
  orderInTag() {
    return;
  }
  orderInDifficulty() {
    return;
  }
  orderInPassRate() {
    return;
  }
  // services
  getProfileActivity() {
    this.getStatisticInPeriod();
    this.getRecentSolved();
    return;
  }
}
