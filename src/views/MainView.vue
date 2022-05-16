<template>
  <div class="grid">
    <div class="col-12 lg:col-8 mb-2">
      <announcement class="c-shadow-8" />
    </div>
    <div class="col-12 lg:col-4 mb-2">
      <daily class="c-shadow-8" />
    </div>
    <div class="col-12 md:col-12 xl:col-8">
      <activity-panel class="c-shadow-8" />
    </div>
  </div>

  <div class="dial-container">
    <SpeedDial
      :model="dialItems"
      direction="up-left"
      type="quarter-circle"
      :radius="120"
      :rotate-animation="false"
      show-icon="fa-solid fa-rocket"
    />
  </div>
</template>

<script lang="ts" setup>
import Announcement from "@/components/Announcement.vue";
import Daily from "../components/Daily.vue";
import ActivityPanel from "@/components/ActivityPanel.vue";
import { reactive, ref } from "vue";
import { dialMenu } from "@/api/components/Menu";
const dialItems = reactive(dialMenu);
</script>

<style lang="scss" scoped>
.dial-container {
  position: fixed;
  width: 3rem;
  height: 3rem;
  right: 3rem;
  bottom: 3rem;
  z-index: 999;
}
</style>
