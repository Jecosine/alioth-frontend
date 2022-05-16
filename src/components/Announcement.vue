<template>
  <Card>
    <template #title>
      <i class="pi pi-inbox text-base"></i
      ><span class="text-base"> Announcements </span>
    </template>
    <Divider />
    <template #content>
      <div class="content-block">
        <ul class="m-0 p-0">
          <template v-for="(announcement, i) in announcements" :key="`sk-${i}`">
            <li>
              <Divider class="border-400" type="dashed" v-if="i !== 0" />
              <div class="flex p-ripple" v-ripple>
                <div style="flex: 1" v-if="false">
                  <Skeleton width="100%" class="mb-2"></Skeleton>
                  <Skeleton width="75%"></Skeleton>
                </div>
                <div class="ann-container border-round">
                  <div
                    class="ann-title-bar mb-2 flex flex-row align-items-center justify-content-between"
                  >
                    <div class="ann-title font-bold text-lg hover:text-primary">
                      {{ announcement.title }}
                    </div>
                    <div class="ann-info inline-flex align-items-center">
                      <div class="ann-author font-bold">
                        <Avatar
                          icon="pi pi-user"
                          class="mr-2 h-2rem w-2rem"
                          shape="circle"
                        ></Avatar>
                        <span class="line-height-1 mr-2">{{
                          announcement.author.nickname
                        }}</span>
                        <span class="ann-time text-300 text-sm">
                          {{ announcement.modifiedTime.toLocaleDateString() }}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="ann-content text-left text-400">
                    {{ removeBlank(announcement.content) }}
                  </div>
                </div>
              </div>
            </li>
          </template>
        </ul>
      </div>
    </template>
  </Card>
</template>
<script lang="ts" setup>
import { computed, Ref, ref } from "vue";
import { useToast } from "primevue/usetoast";
import Divider from "primevue/divider";
import { announcementService } from "@/services/AnnouncementService";
import { useStore } from "vuex";
import { Announcements } from "@/typings/announcement";
import { key } from "@/store";
import { AnnouncementsMock } from "@/mock/announcements";

const toast = useToast();
const store = useStore(key);
// const { result, load, loading, onError, onResult } =
//   announcementService.getAnnouncements({
//     resourceId: store.getters.getUserId,
//   });
const result = ref<Announcements>(AnnouncementsMock);
const announcements: Ref<Announcements> = computed(
  () => result?.value ?? ([] as Announcements)
);
const removeBlank = (s: string): string => {
  return s.replace(/\s{2,}/g, "");
};
</script>
<style scoped lang="scss">
.ann-container {
  &:hover {
    .ann-title {
      transition: all 0.2s;
      text-decoration: underline;
    }
  }

  transition: all 0.2s;
  cursor: pointer;
  border-left: solid 0.4rem rgba(233, 157, 157, 0.22);
  padding-left: 0.5rem;

  .ann-content {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-box-orient: vertical;
    line-height: 1.5em;
  }
}
</style>
